import { Component, OnInit } from '@angular/core';
import { RepresentantesService } from '../../services/representantes.service';

@Component({
  selector: 'app-representantes-consejo',
  templateUrl: './representantes-consejo.component.html',
  styleUrls: ['./representantes-consejo.component.css']
})
export class RepresentantesConsejoComponent implements OnInit {

  representantes: any = [];
  repConsejo: string;
  constructor(private representantesService: RepresentantesService) { }

  ngOnInit() {
    this.representantesService.getRepresentantes().subscribe(
      res => {
        console.log(res[0]['VcNombre']);
        this.repConsejo = res[0]['VcNombre'];
        this.representantes = res;        
      },
      err => console.error(err)
    );
  }

  goToBackend(votacion:string){}

}
