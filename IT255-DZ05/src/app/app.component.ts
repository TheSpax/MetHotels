import { Component } from '@angular/core';
import { Smestaj } from './components/smestaj/smestaj.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DZ05 - MetHotels';
  public listaSmestaja: Smestaj[] = [];
  inputPrice = "";

  constructor() {
    this.listaSmestaja = [
      new Smestaj("New City", "Hotel se nalazi u centru Niša", 23, 5000),
      new Smestaj("Niški cvet", "Hotel se nalazi pored niškog keja", 55, 4000)
    ]
  }

  addSmestaj(smestaj: Smestaj): void{
    this.listaSmestaja.push(smestaj);
  }

  deleteSmestaj(smestaj: Smestaj): void{
    this.listaSmestaja.splice(this.listaSmestaja.indexOf(smestaj), 1)
  }

  shuffleSmestaj(): void{
    let listaSize = this.listaSmestaja.length;
    let randomIndex = Math.floor(Math.random() * listaSize);
    listaSize--;

    let privremeni = this.listaSmestaja[listaSize];
    this.listaSmestaja[listaSize] = this.listaSmestaja[randomIndex];
    this.listaSmestaja[randomIndex] = privremeni;
  }

 }