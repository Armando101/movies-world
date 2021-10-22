import { Component, Input } from '@angular/core';
import { ICast, ICrew } from '@olimpo/frontend/onboarding/data-access';

@Component({
  selector: 'frontend-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent {
  @Input() credit!: ICast & ICrew;
}
