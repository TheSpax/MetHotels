import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SmestajComponent } from './components/smestaj/smestaj.component';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SmestajComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
