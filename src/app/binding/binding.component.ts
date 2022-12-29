import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  
  
abc(fname:any,lname: any)
{
  console.log(fname+":"+lname)
  
}


total=0
emi=0
cal(p:any,t:any,r:any){
  this.total=(p*t*r)/100;
  this.emi=this.total/t;
}
intrest=0
roi(loan:any) {
 if(loan.target.value=='car')
 {
  this.intrest=9;
 }
 else if(loan.target.value=='home')
 {
  this.intrest=7;
 }
 else if(loan.target.value=='persl')
 {
  this.intrest=13;
 }
 else if(loan.target.value=='edu')
 {
  this.intrest=11;
 }
}
}
