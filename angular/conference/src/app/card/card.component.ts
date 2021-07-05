import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() theUserOfTheCard: User | null = null // injects theUserOftheCard
  @Input() theIndex: number | null = null // injects Index
  lastUserClickd: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }


}
