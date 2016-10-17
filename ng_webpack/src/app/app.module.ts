import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { HelloNameComp } from './helloname.comp'

import { AppComp } from './app.comp'
import { routing } from './app.routing'

import { HomeComp } from './home.comp'
import { SignupComp } from './signup.comp'
import { LoginComp } from './login.comp'
import { RepositoryComp } from './myreopo.comp'
 
import { AuthenticationService } from './authentication.service'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [  AuthenticationService  ],
  declarations: [
    AppComponent,
    HelloNameComp,
    AppComp,
    HomeComp,
    SignupComp,
    LoginComp,
    RepositoryComp
  ],
  bootstrap: [ AppComp ]
})
export class AppModule { }
