import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'frontend-circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.scss'],
})
export class CircleProgressBarComponent implements OnChanges {
  @Input() value = 0;
  @Input() title = '';
  color!: string;
  sizeX!: number;

  colors = {
    red: '#CE2028',
    orange: '#FF7E01',
    yellow: '#FDCC0E',
    green: '#03C03D',
  };

  ngOnChanges() {
    this.updateColor();
  }

  updateColor() {
    this.color = this.colors[this.getColor(this.value)];
    this.sizeX = Number.isInteger(this.value) ? 60 : 30;
    this.value = Math.round(this.value * 10) / 10;
  }

  getColor(value: number) {
    if (value <= 2.5) {
      return 'red';
    }
    if (value <= 5.9) {
      return 'orange';
    }
    if (value <= 7.5) {
      return 'yellow';
    }
    return 'green';
  }
}
