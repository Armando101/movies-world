import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'frontend-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  displayMenu = false;
  @HostListener('document:click', ['$event'])
  clicked(event: { target: { id: string } }) {
    if (event.target.id === 'menu') {
      return;
    }
    this.displayMenu = false;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.displayMenu = window.innerWidth >= 1024;
  }

  constructor() {
    this.onResize();
  }
}
