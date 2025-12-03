import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextButtonComponent } from './text-button/text-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TextButtonComponent],
  template: `
    <main style="font-family: Arial, Helvetica, sans-serif; padding: 32px; max-width: 540px; margin: 0 auto;">
      <h1 style="font-size:1.25rem; color:#0f1724;">Very Basic Angular</h1>
      <p style="color:#334155;">A tiny demo with a text and a button component.</p>
      <app-text-button></app-text-button>
    </main>
  `
})
export class AppComponent {}
