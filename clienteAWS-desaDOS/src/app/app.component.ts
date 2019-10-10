import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { DatosComponentService } from './services/datos-component.service';

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
