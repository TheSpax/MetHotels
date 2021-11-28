import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Smestaj } from '../smestaj/smestaj.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() formDataEmitter: EventEmitter<Smestaj>;

  constructor() {
    this.formDataEmitter = new EventEmitter();
  }

  add(hotelName: HTMLInputElement, hotelDesc: HTMLTextAreaElement, roomNumber: HTMLInputElement, price: HTMLInputElement): void{
    let smestaj = new Smestaj(hotelName.value, hotelDesc.value, parseFloat(roomNumber.value), parseFloat(price.value));
    this.formDataEmitter.emit(smestaj);
  }

  ngOnInit(): void {
  }

}
