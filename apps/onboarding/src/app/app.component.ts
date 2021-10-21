import { Component } from '@angular/core';

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'onboarding';

  data = {
    backdropUrl:
      'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg',
    title: 'Cruella',
    tagline: 'Hello Cruel World',
  };
}
