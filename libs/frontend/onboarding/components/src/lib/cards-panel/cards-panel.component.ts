import { Component, Input } from '@angular/core';
import { IMovie } from '@olimpo/frontend/onboarding/data-access';

@Component({
  selector: 'frontend-cards-panel',
  templateUrl: './cards-panel.component.html',
  styleUrls: ['./cards-panel.component.scss'],
})
export class CardsPanelComponent {
  @Input() movies: Array<IMovie> = [];
  @Input() moviesLoader = false;
}
