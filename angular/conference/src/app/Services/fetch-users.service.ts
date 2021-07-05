import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../user';
import { HttpClient } from '@angular/common/http'
import HasResults from '../hasresults';


@Injectable({
  providedIn: 'root'
})
export class FetchUsersService {
  i = 0
  usersArr: User[] = []
  filterdArr: User[] = []
  observedUserArr = new Subject<User[]>()
  observedFilterdArr = new Subject<User[]>()

  // searchedStr: string = 'Josefine'

  constructor(private http: HttpClient) { }

  getTheUsers() {
    if (this.i === 0) {
      const url = 'https://randomuser.me/api/?results=40';
      this.http.get(url).subscribe((x) => {
        let results = (x as HasResults).results
        this.usersArr = results
        this.filterdArr = results
        this.observedUserArr.next(this.usersArr)
        this.i++
      })
    } else {
      this.observedUserArr.next(this.usersArr)

    }
  }

  registerToListenToUsersArr(): Subject<User[]> {
    return this.observedUserArr
  }

  registerToListenToFilteredArr(): Subject<User[]> {
    return this.observedFilterdArr
  }

  filteredUser(xxx: string) {

    let y = this.usersArr.filter(userx => (userx.name.first + " " + userx.name.last).toLowerCase().includes(xxx.toLowerCase()))
    this.filterdArr = y
    console.log('the filterd arr', y);

    console.log(xxx);
    this.observedFilterdArr.next(this.filterdArr)
  }

  // async getTheUsers3() {
  //   console.log('start getTheUsers');
  //   const url = 'https://randomuser.me/api/?results=56';
  //   try {
  //     let x = await fetch(url);
  //     let y = await x.json();

  //     for (let curr of y.results) {
  //       this.usersArr.push(new User(curr.name.first, curr.name.last, curr.email, curr.picture.large))
  //     }
  //     return this.usersArr;
  //   }
  //   catch (err) {
  //     console.log(err);
  //     return err
  //   }
  // }

  // getTheUsers1() {
  //   return new Promise((resolve, reject) => {
  //     console.log('start getTheUsers');
  //     const url = 'https://randomuser.me/api/?results=50';


  //     fetch(url)
  //       .then((x) => {
  //         return x.json()
  //       })
  //       .then((y) => {
  //         for (let curr of y.results) {
  //           this.usersArr.push(new User(curr.name.first, curr.name.last, curr.email, curr.picture.large))
  //         }

  //         resolve(this.usersArr)
  //       })
  //   })
  // }





}


