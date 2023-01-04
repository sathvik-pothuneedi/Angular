import { Component } from '@angular/core';
import { CommondbService } from '../commondb.service';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component {
constructor(private db1: CommondbService){

}
a3comp(){
  this.db1.commondbLogic();
}
}
