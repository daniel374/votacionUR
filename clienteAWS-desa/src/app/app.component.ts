import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { DatosComponentService } from './services/datos-component.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'votaciones';
  mensaje: any;
  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private datosComponentService: DatosComponentService,
    private cookieService: CookieService
    ) {}

  ngOnInit() {
    this.authService.initAuth();
    this.mensaje = this.datosComponentService.mensajeSpinner();
  }

  
}
