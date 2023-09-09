import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './auth/logout/logout.component';
import { RouteReuseStrategy } from '@angular/router';
import { AppRouteReuseStrategy } from './app-route-reuse-strategy';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FormsModule, LogoutComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: AppRouteReuseStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
