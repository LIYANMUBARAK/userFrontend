import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginAuth } from './modules/user/interceptors/login-auth';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoginAuth, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
