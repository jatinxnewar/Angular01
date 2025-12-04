import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent implements OnChanges {
  @Input() color: string = '#4CAF50';
  @Input() size: number = 80;
  @Output() selected = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    // clamp size to a reasonable range
    if (this.size == null || isNaN(this.size)) { this.size = 80; }
    this.size = Math.max(20, Math.min(300, Number(this.size)));
    // normalize color string (basic) — keep as provided for now
  }

  get sizePx() { return this.size + 'px'; }

  onClick() {
    this.selected.emit(this.color);
  }
}
