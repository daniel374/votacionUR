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
  representantes: any = [];
  repConsejo: string;

  public isButtonVisible: boolean;
  constructor(private representantesService: RepresentantesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    /* trae los representantes del consejo */
    this.route.queryParams.subscribe((p: ParamMap) => {
      this.vcId = +p['vcId'] || 0;
      if(this.vcId !=0){
        console.log(this.vcId);
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

  continuar(){
    this.isButtonVisible = true;
  }

  iraRepresent(votacion: string){

  }

}
