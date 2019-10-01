import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  
  constructor(
    private spinner: NgxSpinnerService
  ) { }

  activate() {
    this.spinner.show();
  }
  
  deactivate() {
    this.spinner.hide();
  }
}
