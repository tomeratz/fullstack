import { Component, OnInit } from '@angular/core';
import { Msg } from '../message';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model = new Msg('Nftali Benet', 'naftali@gov.il', 'kajhf adshfkajsd')



  constructor() { }

  ngOnInit(): void {
  }

}
