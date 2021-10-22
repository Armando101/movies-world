import { Component } from '@angular/core';

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'onboarding';

  data = {
    title: 'Emma Stone',
    subtitle: 'Estella / Cruella',
    imageUrl:
      'https://image.tmdb.org/t/p/w138_and_h175_face/2hwXbPW2ffnXUe1Um0WXHG0cTwb.jpg',
  };
}
