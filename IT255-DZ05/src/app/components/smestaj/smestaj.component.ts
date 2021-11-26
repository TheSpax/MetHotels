import { Component, Input, OnInit } from '@angular/core';
import { Smestaj } from './smestaj.model';

@Component({
  selector: 'app-smestaj',
  templateUrl: './smestaj.component.html',
  styleUrls: ['./smestaj.component.css']
})
export class SmestajComponent implements OnInit {

  @Input() smestaj: Smestaj;

  constructor() {
    this.smestaj = new Smestaj("", "", 0, 0)
  }

  ngOnInit(): void {
  }

}