import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Service } from '../form/service';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  providers:[Service]

})
export class ChildComponent implements OnChanges {
  @Input() name:string=""
  @Output() changePage = new EventEmitter<number>()
  constructor(private service:Service) {
    console.log(this.service.state)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  handlerClick(event:Event){
    event.stopPropagation();
    this.changePage.emit(1);
  }
}
