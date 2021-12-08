import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../../../shared/interfaces/data.interface';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // vuelva a renderizar si una propiedad cambia
})
export class CharactersCardComponent {
  @Input()
  character!: Character;

  getIcon(): string {
    return this.character.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }

  toggleFavorite(): void {
    const isFavorite = this.character.isFavorite;

    this.getIcon();

    this.character.isFavorite = !isFavorite;
  }

  constructor() {}
}
