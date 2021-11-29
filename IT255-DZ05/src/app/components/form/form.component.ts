import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Smestaj } from '../smestaj/smestaj.model';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() formDataEmitter: EventEmitter<Smestaj>;
  smestajForm: FormGroup
  name: AbstractControl
  desc: AbstractControl
  roomNumber: AbstractControl
  price: AbstractControl

  constructor(formBuilder: FormBuilder) {
    this.formDataEmitter = new EventEmitter();
    this.smestajForm = formBuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.pattern(/^([\u00c0-\u01ffa-zA-Z&'-])+$/)])],
      'desc': [null, Validators.required],
      'roomNumber': [null, Validators.compose([Validators.required, Validators.pattern(/^\d+$/)])],
      'price': [null, Validators.compose([Validators.required, Validators.pattern(/^\d+$/)])]
    })

    this.name = this.smestajForm.controls['name'];
    this.desc = this.smestajForm.controls['desc'];
    this.roomNumber = this.smestajForm.controls['roomNumber'];
    this.price = this.smestajForm.controls['price'];
    
    this.desc.valueChanges.subscribe( (hotelDesc: string) =>  {
      if(hotelDesc.length < 6){
        console.log("Opis sadrzi " + hotelDesc.length + " karaktera. Minimum je 6.");
      }
    })
  }
  
  add(smestajForm: any): void{
    let smestaj = new Smestaj(smestajForm.name, smestajForm.desc, smestajForm.roomNumber, smestajForm.price);
    this.formDataEmitter.emit(smestaj);
  }

  ngOnInit(): void {
  }

}
