import { Component, Input, OnChanges } from '@angular/core';
import { ICast, ICrew } from '@olimpo/frontend/onboarding/data-access';
import { imageCharacter, imagePath } from '../constants/imageSizes';

@Component({
  selector: 'frontend-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent implements OnChanges {
  @Input() credit!: ICast & ICrew;
  image!: string;

  ngOnChanges() {
    this.image = `${imagePath}/${imageCharacter}/${this.credit.profile_path}`;
  }
}
