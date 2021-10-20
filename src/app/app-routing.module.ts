import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForComponent } from './for/for.component';
import { FormComponent } from './form/form.component';
import { IfComponent } from './if/if.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
 {path:'', component:ParentComponent},
 {path:'if', component:IfComponent},
 {path:'for', component:ForComponent},
 {path:'form', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
