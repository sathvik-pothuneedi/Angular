import { Component } from '@angular/core';
import { CommondbService } from '../commondb.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component {
  constructor(private db1:CommondbService){

  }
  a2comp(){
    this.db1.commondbLogic();
  }
}
