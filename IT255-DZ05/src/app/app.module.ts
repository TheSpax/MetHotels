import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SmestajComponent } from './components/smestaj/smestaj.component';
import { FilterPipe } from './filter/filter.pipe';
import { FormComponent } from './components/form/form.component';
import { RoomServiceService } from './services/room-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SmestajComponent,
    FilterPipe,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    RoomServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
