import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyDatePickerModule } from 'mydatepicker';

import {
  RootComponent,
  HeaderComponent,
  ClientsComponent,
  ClientDialogComponent,
  SpinnerComponent
} from './components';

import {
  HttpService,
  ClientService,
  DialogService,
  DateService,
  HelperService
} from './services';


@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    ClientsComponent,
    ClientDialogComponent,
    SpinnerComponent
  ],
  entryComponents: [
    ClientDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyDatePickerModule
  ],
  providers: [
    HttpService,
    ClientService,
    DialogService,
    DateService,
    HelperService
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
