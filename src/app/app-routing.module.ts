import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ServicedemoComponent } from './servicedemo/servicedemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [

{
  path:"home",
  component:HomeComponent


},
{
  path : "binding",
  component:BindingComponent
},


{
path : "register",
component:RegisterComponent
},
{
path : "login",
component:LoginComponent
},
{
path : "directive",

component : DirectiveComponent 
},
{
  path : "forms",
  component : FormsComponent
},
{
  path : "rforms",
  component : ReactiveformComponent
},
{
  path : "service",
  component : ServicedemoComponent
},
{
  path : "pipe",
  component : PipedemoComponent
},
{
  path:'emp',
  component : EmployeeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }