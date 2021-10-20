import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',

})
export class ChildComponent implements OnChanges {
  @Input() name:string=""
  @Output() changePage = new EventEmitter<number>()
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  handlerClick(event:Event){
    event.stopPropagation();
    this.changePage.emit(1);
  }
}
