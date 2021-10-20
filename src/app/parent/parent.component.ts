import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent  {
  name:string = "Hello"
  constructor() { }
  handlerClick(event:Event){
    this.name = "Pedro";
  }
  changePage(page:number){
    console.log(page);
  }

}
