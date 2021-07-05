import { Component, Input, OnInit } from '@angular/core';
import { FetchUsersService } from '../sevices/fetch-users.service';
import { User } from '../userClass';

@Component({
  selector: 'gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})

export class GalleryItemComponent implements OnInit {
  @Input() userCard: User | null | undefined


  constructor(private getUsersService: FetchUsersService) { }

  ngOnInit(): void {

  };
}
