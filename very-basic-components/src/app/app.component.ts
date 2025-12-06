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
  boxSize = 120;
  colorHistory: string[] = [];
  
  onBoxSelected(color: string) {
    // when color-box emits selected, update the color and track history
    if (color) {
      this.boxColor = color;
      if (!this.colorHistory.includes(color)) {
        this.colorHistory.unshift(color);
        if (this.colorHistory.length > 8) {
          this.colorHistory.pop();
        }
      }
    }
  }
  
  reset() {
    this.boxColor = '#ff5722';
    this.boxSize = 120;
    this.colorHistory = [];
  }
  
  selectFromHistory(color: string) {
    this.boxColor = color;
  }
}
