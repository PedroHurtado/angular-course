import { Component, OnInit } from '@angular/core';
import { Service } from '../form/service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',

})
export class ParentComponent  {
  name:string = "Hello"
  constructor(private service:Service) {
      console.log(this.service.state);
      this.service.state =0;
   }
  handlerClick(event:Event){
    this.name = "Pedro";
  }
  changePage(page:number){
    console.log(page);
  }

}
