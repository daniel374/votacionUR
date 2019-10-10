import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth.service';
import { Configs } from '../../lib/config';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  public isCollapsed = true;

  session = false;
  public pageName: string;

  constructor(
    private authService: AuthService, 
    private ref: ChangeDetectorRef, 
    private router: Router
  ) { }

  ngOnInit() {
    //this.checkSession()
  }

  checkSession(): void {
    // console.log("[checkSession]");
    
    //Change visual state, if has ó hasnt token
    if( this.authService.hasSessiontoken() ){
        // console.log("[checkSession] has token, verify token wit http");
        this.session = true;
        this.ref.detectChanges();
    }
    else{
        console.log("[checkSession] hasnt token, hide button logout");
        this.session = false;
        this.ref.detectChanges();
    }
  }

  logout(): void {
    //Call api msal
    this.authService.logout( (idToken) => {
      sessionStorage.clear();
      localStorage.clear();
      this.session = false;
      this.ref.detectChanges();
      //window.location.href = "https://appname.auth0.com/v2/logout?federated"
      //window.location.href = "https://login.microsoftonline.com/common/oauth2/v2/logout?p=" + Configs.appId + "&id_token_hint=" + idToken + "&post_logout_redirect_uri=http://localhost:8887/";
      var pageName = '/';
      this.router.navigate([`${pageName}`])
    });
    //Change visual state
    
  }
}
