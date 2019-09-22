import { Component, OnInit } from '@angular/core';
import { ConsejosService } from '../../services/consejos.service';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent implements OnInit {

  consejos: any = [];
  idConsejo: number;
  
  constructor(private consejosService: ConsejosService) { }

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

}
