import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor() { }

  public calculatePrice(numberOfNights: number, pricePerNight: number){
    return numberOfNights * pricePerNight;
  }  
}
