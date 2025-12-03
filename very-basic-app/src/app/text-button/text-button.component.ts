import { Component } from '@angular/core';

@Component({
  selector: 'app-text-button',
  standalone: true,
  template: `
    <div style="display:flex;flex-direction:column;gap:12px;align-items:flex-start">
      <div id="message" style="padding:12px;background:#f8fafc;border:1px solid #e6eef8;border-radius:8px;color:#0f1724;min-width:220px">Hello — click the button to change this text.</div>
      <button (click)="onClick()" style="padding:8px 12px;border-radius:8px;border:1px solid #0f62fe;background:#0f62fe;color:white;cursor:pointer">Click me</button>
    </div>
  `
})
export class TextButtonComponent {
  onClick() {
    const el = document.getElementById('message');
    if (el) el.textContent = 'You clicked the button!';
  }
}
