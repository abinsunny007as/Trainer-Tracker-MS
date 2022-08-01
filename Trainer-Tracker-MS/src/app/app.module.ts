import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { AllviewComponent } from './allview/allview.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    MenuComponent,
    LoginComponent,
    AddComponent,
    UpdateComponent,
    ForgotpwdComponent,
    AllviewComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
