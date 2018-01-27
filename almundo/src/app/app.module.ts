import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HotelService } from './hotel.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [ AppComponent, HeaderComponent, FilterComponent, ResultComponent ],
  imports: [
  	BrowserModule,
  	HttpClientModule,
  	BrowserAnimationsModule,
  	MaterialModule,
  	FormsModule,
  ],
  bootstrap: [ AppComponent ],
  providers: [  ]
})
export class AppModule { }
