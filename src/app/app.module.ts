import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'hammerjs';
import { SelectDropDownModule } from 'ngx-select-dropdown'

import { routing } from './app.routing';

import { replaceHeightAndWidth } from './_pipes/replaceStringPipe';
import { sortingDataPipe } from './_pipes/sortingDataPipe';
import { MainService } from './_services';

import { AppComponent } from './app.component';
import { NavigationComponent  } from './shared/navigation/navigation.component';
import { ListingCardComponent } from './listing/listing-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    replaceHeightAndWidth,
    sortingDataPipe,
    ListingCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    routing,
    SelectDropDownModule
  ],
  providers: [
    MainService
  ],
  exports: [
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
