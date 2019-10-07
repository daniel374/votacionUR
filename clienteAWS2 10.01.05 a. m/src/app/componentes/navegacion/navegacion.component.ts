import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  session = false;
  public pageName: string;

  constructor(
    private authService: AuthService, 
    private ref: ChangeDetectorRef, 
    private router: Router
  ) { }

  ngOnInit() {
    this.checkSession()
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
    this.authService.logout()
    //Change visual state
    this.session = false;
    this.ref.detectChanges();
    localStorage.clear();
    this.pageName = '/';
    this.router.navigate([`${this.pageName}`])
  }
}
