import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',

})
export class ForComponent {

  colections:Array<string>=new Array<string>("pagina1","pagina2","pagina3")
  constructor() { }

}
