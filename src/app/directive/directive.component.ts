import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
 arr=[1,2,3,4,5]
 boys=["sathvik","vijay","vamsi","sesi"]

 add(safe:any)
 {
  this.boys.push(safe)
 }

}
