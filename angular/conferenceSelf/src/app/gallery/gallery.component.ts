import { Component, OnInit } from '@angular/core';
import { FetchUsersService } from '../sevices/fetch-users.service';
import { User } from '../userClass';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  userArr: User[] = []
  constructor(private getUsersService: FetchUsersService) { }
  ngOnInit(): void {
    this.getUsersService.fetchUsersfromUrl()
      .then((x) => {
        this.userArr = x as User[];
      });
  }

}
