import { Component, Input } from '@angular/core';

@Component({
  selector: 'frontend-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
}
