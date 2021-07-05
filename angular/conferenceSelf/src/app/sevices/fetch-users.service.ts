import { Injectable } from '@angular/core';
import { User } from '../userClass';

@Injectable({
  providedIn: 'root'
})
export class FetchUsersService {
  /// declaring on the array that we'd like to fetch
  userArr: User[] = []

  constructor() { }

  async fetchUsersfromUrl() {
    console.log(' start fetchUsersfromUrl');
    const url = 'https://randomuser.me/api/?results=50';
    let x = await fetch(url);
    let y = await x.json();
    console.log(y);

    for (let curr of y.results) {
      this.userArr.push(new User(curr.name.first, curr.name.last, curr.email, curr.picture.large))
    }
    return this.userArr
  }
}
