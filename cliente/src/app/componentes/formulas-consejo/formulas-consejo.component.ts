import { Component, OnInit } from '@angular/core';
import { FormulasService } from '../../services/formulas.service';

@Component({
  selector: 'app-formulas-consejo',
  templateUrl: './formulas-consejo.component.html',
  styleUrls: ['./formulas-consejo.component.css']
})
export class FormulasConsejoComponent implements OnInit {

  formulas: any = [];

  constructor(private formulasService: FormulasService) { }

  ngOnInit() {
    this.formulasService.getFormulas().subscribe(
      res => {
        this.formulas = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
