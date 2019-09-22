import { Component, OnInit } from '@angular/core';
import { RepresentantesService } from '../../services/representantes.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-representantes-consejo',
  templateUrl: './representantes-consejo.component.html',
  styleUrls: ['./representantes-consejo.component.css']
})
export class RepresentantesConsejoComponent implements OnInit {

  vcId: any;
  /* data formula */
  public nomFormula: any;
  public forPresiFoto: any;
  public nomforPresi: any;
  public forVipreFoto: any;
  public nomforVipre: any;
  public dataFormula: any;
  /* data Representante */
  dataRepre: any;

  representantes: any = [];
  repConsejo: string;

  public isButtonVisible: boolean;
  constructor(private representantesService: RepresentantesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    /* trae los representantes del consejo */
    this.route.queryParams.subscribe((p: ParamMap) => {
      this.dataFormula = p['dataFormula'];//JSON.stringify(p);
      console.log("data formula  "+this.dataFormula);
      this.vcId = +p['vcId'] || 0;
      this.nomFormula = this.dataFormula[0];
      this.forPresiFoto = this.dataFormula[1];
      this.nomforPresi = this.dataFormula[2];
      this.forVipreFoto = this.dataFormula[3];
      this.nomforVipre = this.dataFormula[4];
      if(this.vcId !=0){
        console.log(this.vcId);

        console.log("nombre formula  "+this.nomFormula);
        console.log("foto presidente  "+this.forPresiFoto);
        console.log("nombre presidente  "+this.nomforPresi);
        console.log("foto vicepresidente  "+this.forVipreFoto);
        console.log("nombre vicepresidente  "+this.nomforVipre);
        
        this.representantesService.getRepresentConse(this.vcId).subscribe(
          res => {
            this.representantes = res;
            console.log(res[0]['VcNombre']);
            this.repConsejo = res[0]['VcNombre'];
            if(this.repConsejo!=""){
              this.repConsejo = res[0]['VcNombre'];
            }else{
              this.repConsejo = "";
            }
            this.representantes = res; 
          },
          err => console.error(err)
        );
      }
    });

    /* trae todos los representantes */
    /* this.representantesService.getRepresentantes().subscribe(
      res => {
        console.log(res[0]['VcNombre']);
        this.repConsejo = res[0]['VcNombre'];
        this.representantes = res;        
      },
      err => console.error(err)
    ); */
  }

  continuar(repreFoto: string,nomRepre: string,semestRepre: string,planRepre: string){
    this.isButtonVisible = true;
    //data repre para envio
    this.dataRepre = [
      repreFoto,
      nomRepre,
      semestRepre,
      planRepre,
    ]
    //data formu para envio
    this.dataFormula = [
      this.nomFormula,
      this.forPresiFoto,
      this.nomforPresi,
      this.forVipreFoto,
      this.nomforVipre,
    ]

  }

  iraRepresent(votacion: string){

  }

}
