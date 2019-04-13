import { Component, Input } from '@angular/core';
import { User } from './app.component';


@Component({
  selector: 'app-child',
  styleUrls: ['./child.component.scss'],
  templateUrl: './child.component.html'
})
export class ChildComponent {
@Input() users : User;
  constructor(){
  }
  
}