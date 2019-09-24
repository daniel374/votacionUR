import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// This lets me use jquery
//declare var $: any;
@Component({
  selector: 'app-id-voto',
  templateUrl: './id-voto.component.html',
  styleUrls: ['./id-voto.component.css']
})
export class IdVotoComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
