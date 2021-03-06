import { Component } from '@angular/core';
import { DataService } from '@shared/services/data.service';

@Component({
  selector: 'app-characters-list',
  // templateUrl: './characters-list.component.html',
  template: `<section class="character__list">
    <app-characters-card
      *ngFor="let character of characters$ | async"
      [character]="character"
    ></app-characters-card>
  </section> `,
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  characters$ = this.dataService.characters$;

  constructor(private dataService: DataService) {}
}
