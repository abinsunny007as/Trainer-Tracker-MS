import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddComponent } from './add/add.component';
import { AllviewComponent } from './allview/allview.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'',component:LoginComponent},
  {path:'forgotpwd',component:ForgotpwdComponent},
  {path:'add',component:AddComponent},
  {path:'update',component:UpdateComponent},
  {path:'allview',component:AllviewComponent },
  {path:'schedule',component:ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
