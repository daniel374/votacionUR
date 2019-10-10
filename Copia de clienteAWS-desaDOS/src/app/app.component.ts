import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { DatosComponentService } from './services/datos-component.service';
import * as Msal from 'msal';
import * as Graph from '@microsoft/microsoft-graph-client';
import * as GraphTypes from '@microsoft/microsoft-graph-types';

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
    private datosComponentService: DatosComponentService
    ) {}

  ngOnInit() {
    this.authService.initAuth();
    this.mensaje = this.datosComponentService.mensajeSpinner();
  }


  
}
