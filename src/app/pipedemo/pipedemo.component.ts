import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent {
 amount = 99999999
 name = "Vijay IS a HERO"

 d = new Date()
}
