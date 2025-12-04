import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Very basic components demo';
  userName = 'Student';
  boxColor = '#ff5722';
  
  onBoxSelected(color: string) {
    // when color-box emits selected, update the color
    if (color) { this.boxColor = color; }
  }
}
