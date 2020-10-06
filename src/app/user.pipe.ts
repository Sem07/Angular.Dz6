import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/User';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: [], ...args: string[]): any {
   for (let user of value){
     const a = user + 2
     return a
   }
   
  }

}
