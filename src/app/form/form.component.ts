import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent  {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('',[Validators.required]),
  });
  constructor() {
    this.profileForm.setValue({
      firstName:'Pedro',
      lastName:''
    })
  }

  handlerSubmit(event:Event){
    if(this.profileForm.valid){
      console.log(this.profileForm);
    }
  }



}
