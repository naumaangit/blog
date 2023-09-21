import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  displayVal = '';
  getName(name:string, secondName:string)
  {
    alert(name);
    alert(secondName);
  }

  getData(val:string)
  {
    console.warn(val);
  }

  getValue(val:string)
  {
    console.warn(val);
    this.displayVal=val;
  }
}
