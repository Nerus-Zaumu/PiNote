import { HeaderComponent } from './dashboard/header/header.component';
import { AdditionComponent } from './dashboard/addition/addition.component';
import { BacklogComponent } from './dashboard/backlog/backlog.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: HeaderComponent},
    {path: 'home', component: HomeComponent},
    {path: 'backlog', component: BacklogComponent},
    {path: 'addition', component: AdditionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
