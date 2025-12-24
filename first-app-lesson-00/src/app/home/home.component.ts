import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  HomeMessage = signal('Welcome to the Home Component!');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`User pressed the ${event.key} key`);
  }
}
