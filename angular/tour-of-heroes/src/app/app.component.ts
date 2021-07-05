import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <div *ngIf="CurSelectedHero">{{CurSelectedHero.name}}</div>
  <ul class="heroes">
  <li *ngFor="let hero of HEROES" [class.selected]="hero === CurSelectedHero"
  (click)="myFunction(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
</li>

  </ul>
`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour-of-heroes';
  HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  heroes = this.HEROES;
  CurSelectedHero: any = null;

  myFunction(hero: Hero) {
    this.CurSelectedHero = hero
  }
}

export class Hero {
  id: number;
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}