
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

import { ResponseWs } from '../interfaces/ResponseWs';

import * as hello from 'hellojs/dist/hello.all.js';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  url = 'https://graph.microsoft.com/v1.0';
  file = 'demo.xlsx';
  table = 'Table1';
  results: [];

  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private zone: NgZone,
    private router: Router
    ) {
  }

  initAuth() {
    hello.init({
        msft: {
          id: Configs.appId,
          oauth: {
            version: 2,
            auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
          },
          scope_delim: ' ',
          form: false
        },
      },
      { redirect_uri: window.location.href }
    );
  }

  login(callback) {
    hello('msft').login({ scope: Configs.scope }).then(
      callback,
      e => console.error(e.error.message)
    );
  }

  logout() {
    this.http.post<any>(Configs.url + "webadmin/utils/urlslogout", {}).pipe(map(response => response.json() )).subscribe(response => {
      console.log(response.data);

      window.open(response.data.url_agendamate);
      window.open(response.data.url_backend);
      window.open(response.data.url_videomate);

    });

    hello('msft').logout().then(
      () => {},
      e => console.error(e.error.message)
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

  