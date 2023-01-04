import { Component } from '@angular/core';
import { CommondbService } from '../commondb.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component {
  constructor(private db1:CommondbService){

}

a1comp(){
  this.db1.commondbLogic();
}
}