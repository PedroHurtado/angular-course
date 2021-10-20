import { Injectable } from "@angular/core"
import { UserDto } from "./userDto"
/*function removeEmpty(obj:any) {
  return Object.keys(obj)
    .filter(function (k) {
      return obj[k] != null;
    })
    .reduce(function (acc, k) {
      acc[k] = typeof obj[k] === "object" ? removeEmpty(obj[k]) : obj[k];
      return acc;
    }, {});
}*/


Injectable()
export class Service{
  state:number=1
  add(user:UserDto){
    console.log(JSON.stringify(user))
  }
  get(id:number):UserDto{
    return {
      firstName:'Pedro',
      lastName:null
    }
  }
}

