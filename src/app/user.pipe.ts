import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/User';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {
  
  transform(value: User[], ...args: string[]): any {
    let changedUsers;
    if (value){
    value.forEach(user => {
      changedUsers += `<div>
                      <h2>${user.id} - ${user.name}</h2>
                      <p> ${user.phone} , ${user.email} </p>
                      </div>`;
    });
    return changedUsers;}
  }
}
