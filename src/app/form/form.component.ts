import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Service } from './service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent  {
  private suscription:Subscription|null = null
  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl(null),
  })
  constructor(private router:Router,private service:Service,private activeRoute:ActivatedRoute) {
    this.suscription = this.activeRoute.params.subscribe((params)=>{
      this.suscription && this.suscription.unsubscribe();
      this.profileForm.setValue(this.service.get(params.id))
    })
  }

  handlerSubmit(event:Event){
    if(this.profileForm.valid){
      this.service.add(this.profileForm.value)
      this.router.navigate(['/'])
    }
  }



}
