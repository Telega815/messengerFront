import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
    imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
