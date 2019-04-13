import { Component } from '@angular/core';

export interface User {
  name : string;
  title: string;
  isAdmin : boolean;
  
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title : string;
  imageUrl : string  = 'https://firebasestorage.googleapis.com/v0/b/client-management-111c5.appspot.com/o/iso_back.jpg?alt=media&token=e0c7bc82-cf4f-4d06-abdb-2c5d205f3ed9'
  showImage : boolean = false;
  imageToggleMessage : string = "Show Image"
  numbers : number[];
  name : string = 'Nick Tsoukas'

  users: User[] = [
    {
      name : 'nick',
      title: 'Developer',
      isAdmin: true
    },
    {
      name : 'Peter',
      title: 'Developer',
      isAdmin: false
    },
    {
      name : 'John',
      title: 'Developer',
      isAdmin: false
    },
    {
      name : 'Mike',
      title: 'Developer',
      isAdmin: true
    }
  ]

  constructor(){
    this.title = "Learning Grounds";
    this.numbers = this.buildArray();
  }

  imageToggle(){
    if(this.showImage){
      this.showImage = false;
      this.imageToggleMessage = "Show Image"
    }
    else {
      this.showImage = true;
      this.imageToggleMessage = "Hide Image"
    }
  }
  buildArray(): number[] {
    let array = [];
    for(let i =0; i< 10; i++) {
      array.push(i);
    }
    return array;

  }
  
}