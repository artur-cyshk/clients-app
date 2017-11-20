import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MyDatePickerModule } from 'mydatepicker';
import { router } from './app.router';
import {
  RootComponent,
  ClientsComponent,
  ClientDialogComponent
} from './components';
import {
  HeaderComponent,
  SpinnerComponent
} from './shared/components';
import {
  HttpService,
  ClientService,
  DialogService,
  DateService,
  HelperService
} from './shared/services';


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
    MyDatePickerModule,
    RouterModule.forRoot(router)
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
