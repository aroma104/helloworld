import { Component } from '@angular/core';

//view
@Component({
  selector: 'my-app',
  //templateUrl 선언으로 파일 호출해서 써야함
  template: `
  <h1>Angular 2 App</h1>
  
  <h2 [style.color]="foreColor" (click)="btnChange_Click()">
    {{ title }}
  </h2>
  
  `
})

//controller
export class AppComponent  {
  title : string = "<클릭>";
  foreColor = 'red';

  btnChange_Click(): void{
    this.foreColor = (this.foreColor === 'red') ? 'blue' : 'red';
  }

}

