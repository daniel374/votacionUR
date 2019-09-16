import { Component, OnInit } from '@angular/core';
import { RepresentantesService } from '../../services/representantes.service';

@Component({
  selector: 'app-representantes-consejo',
  templateUrl: './representantes-consejo.component.html',
  styleUrls: ['./representantes-consejo.component.css']
})
export class RepresentantesConsejoComponent implements OnInit {

  representantes: any = [];

  constructor(private representantesService: RepresentantesService) { }

  ngOnInit() {
    this.representantesService.getRepresentantes().subscribe(
      res => {
        this.representantes = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
