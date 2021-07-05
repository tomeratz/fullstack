import { Component, OnInit } from '@angular/core';
import { FetchUsersService } from '../Services/fetch-users.service';
import { User } from '../user';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  usersArr: User[] = []
  lastUserClickd: number | null = null
  constructor(private myService: FetchUsersService) {

  }
  ngOnInit(): void {

    this.myService.registerToListenToUsersArr()
      .subscribe((xx: User[]) => {   //observe on x
        console.log(xx);
        this.usersArr = xx
      });

    this.myService.getTheUsers()

    this.myService.registerToListenToFilteredArr()
      .subscribe((xx: User[]) => {   //observe on x
        console.log(xx);
        this.usersArr = xx
      });
  }

  checkUserUpdate(x: string): void {
    console.log('start');

    this.myService.filteredUser(x)

  }

}

