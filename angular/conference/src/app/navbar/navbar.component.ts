import { Component, OnInit } from '@angular/core';
import { FetchUsersService } from '../Services/fetch-users.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']


})
export class NavbarComponent implements OnInit {
  searchUserByName: string = ''
  constructor() {

  }

  ngOnInit(): void {
  }


}
