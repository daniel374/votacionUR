import { Component, OnInit } from '@angular/core';
import { ConsejosService } from '../../services/consejos.service';
import { DatosComponentService } from '../../services/datos-component.service';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent implements OnInit {

  consejos: any = [];
  idConsejo: number;
  /* variables data consejo */
  datConsejo: any = [];
  
  
  constructor(
    private consejosService: ConsejosService,
    private datosComponentService: DatosComponentService  
  ) { }

  formulasConsejo(idConsejo){
    console.log(idConsejo);
  }


  ngOnInit() {
    this.consejosService.getConsejos().subscribe(
      res => {
        this.consejos = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  serGuarConsejo(vcId: number, noConsejo: any){
    this.datConsejo = [
      vcId,
      noConsejo
    ]
    console.log("info service consejo "+this.datConsejo);
    this.datosComponentService.guarDatosConsejo(this.datConsejo);
  }

}
