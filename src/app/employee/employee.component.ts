import { Component, OnInit } from '@angular/core';
import { EmpservService } from '../empserv.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  constructor(private emp: EmpservService){

  }
  myemp:any=[]
  ngOnInit(): void {
    console.log(this.emp.emp);
    this.myemp=this.emp.emp;
  }

 

  

}
