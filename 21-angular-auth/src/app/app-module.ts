import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { RegisterComponent } from './components/register.component';
import { LoginComponent } from './components/login.component';
import { ProfileComponent } from './components/profile.component';
import { LayoutComponent } from './components/layout.component';

@NgModule({
  declarations: [
    App,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
