
/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

import {map} from 'rxjs/operators';


import * as MicrosoftGraphClient from "@microsoft/microsoft-graph-client"

import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';


import { HttpService } from '../services/http.service';
import { Configs } from '../lib/config';
import { MsalModule, MsalService } from '@azure/msal-angular';
import { User } from '../interfaces/ResponseWs';

import * as hello from 'hellojs/dist/hello.all.js';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Injectable()
export class AuthService {
  url = 'https://graph.microsoft.com/v1.0';
  file = 'demo.xlsx';
  table = 'Table1';
  results: [];
  //
  public authenticated: boolean;
  public user: User;
  
  constructor(
    private msalService: MsalService,
    private http: HttpClient,
    private httpService: HttpService,
    private zone: NgZone,
    private router: Router
    ) {
    this.authenticated = this.msalService.getUser() != null;
    this.getUser().then((user) => {this.user = user});
  }
  // SignIn user
  async signIn(callback): Promise<void> {
    let result = await this.msalService.loginPopup(Configs.scope)
      .then(
        callback,
        e => console.error(e.error.message)
      )
      .catch((reason) => {
        console.log('LOGIN FAILED', JSON.stringify(reason, null, 2));
      });
    if (result) {
      this.authenticated = true;
      this.user = new User();
      this.user = await this.getUser();
    }
  }
  // Sign Out
  signOut(): void {
    this.msalService.logout();
    this.user = null;
    this.authenticated = false;
  }
  // 
  async getAccessToken(): Promise<string> {
    let result = await this.msalService.acquireTokenSilent(Configs.scope)
      .catch((reason) => {
        console.log('Get token failed', JSON.stringify(reason, null, 2));
      })

      // Temporary to display token in an error box
      if (result) {console.log('Token acquired', result);}
      return result;
  }
  //
  private async getUser(): Promise<User> {
    if (!this.authenticated) return null;
  
    let graphClient = MicrosoftGraphClient.Client.init({
      // Initialize the Graph client with an auth
      // provider that requests the token from the
      // auth service
      authProvider: async(done) => {
        let token = await this.getAccessToken()
          .catch((reason) => {
            done(reason, null);
          });
  
        if (token)
        {
          done(null, token);
        } else {
          done("Could not get an access token", null);
        }
      }
    });
  
    // Get the user from Graph (GET /me)
    let graphUser = await graphClient.api('/me').get();
  
    let user = new User();
    user.displayName = graphUser.displayName;
    // Prefer the mail property, but fall back to userPrincipalName
    user.userPrincipalName = graphUser.mail || graphUser.userPrincipalName;
  
    return user;
  }

  initAuth() {
    hello.init({
        msft: {
          id: Configs.appId,
          oauth: {
            version: 2,
            auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
      //auth: 'https://login.microsoftonline.com/common/oauth2/nativeclient'
            grant: 'https://login.microsoftonline.com/common/oauth2/v2.0/token'
          },
          scope_delim: ' ',
          form: false
        },
      },
      { redirect_uri: window.location.href }
    );
  }

  login(callback) {
    hello('msft').login({scope: Configs.scope}).then(
      callback,
      e => console.error(e.error.message)
    );
  }

  logout() {
    
    hello('msft').logout().then(function(){
      localStorage.clear();
		  sessionStorage.clear();
		alert('Signed out');
      },
      function(e) {
		alert('Signed out error: ' + e.error.message);
	  } 
    );

  }

  hasSessiontoken() {
    const msft = hello('msft').getAuthResponse();
    if( msft == null ){
      return null;
    }
    else{
      const accessToken = msft.access_token;
      return accessToken;
    }
  }

  getClient(): MicrosoftGraphClient.Client
  {
    var client = MicrosoftGraphClient.Client.init({
      authProvider: (done) => {
          done(null, this.httpService.getAccessToken()); //first parameter takes an error if you can't get an access token
      }
    });
    return client;
  }

  getMe(callbackSuccess, callbackFail) {
    var client = this.getClient();
    if( client ){
      client.api('me').get((err, res) => {
        if( res == null ){
          callbackFail();
        }
        else if( res.id ){
          callbackSuccess(res);
        }
      });
    }
    else{
      return null;
    }
  }
}

  