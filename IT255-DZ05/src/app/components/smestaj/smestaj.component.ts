import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Smestaj } from './smestaj.model';

@Component({
  selector: 'app-smestaj',
  templateUrl: './smestaj.component.html',
  styleUrls: ['./smestaj.component.css'],
})
export class SmestajComponent implements OnInit {
  @Output() deleteSmestajEmitter: EventEmitter<Smestaj>;
  @Input() smestaj: Smestaj;

  isDisplayed = true;

  constructor() {
    this.smestaj = new Smestaj('', '', 0, 0);
    this.deleteSmestajEmitter = new EventEmitter();
  }

  public delete(): void {
    this.deleteSmestajEmitter.emit(this.smestaj);
  }

  public update(
    hotelName: HTMLInputElement,
    hotelDesc: HTMLTextAreaElement,
    roomNumber: HTMLInputElement,
    price: HTMLInputElement
  ): void {
    this.smestaj.hotelName = hotelName.value;
    this.smestaj.hotelDesc = hotelDesc.value;
    this.smestaj.roomNumber = parseFloat(roomNumber.value);
    this.smestaj.price = parseFloat(price.value);
    this.isDisplayed = !this.isDisplayed;
  }

  ngOnInit(): void {}
}
