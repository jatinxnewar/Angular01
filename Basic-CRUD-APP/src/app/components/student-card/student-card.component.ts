import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../models/student.model';
import { RouterLink } from '@angular/router';
import { AgePipe } from '../../pipes/age.pipe';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CommonModule, RouterLink, AgePipe],
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
  @Input() student!: Student;
  @Output() remove = new EventEmitter<string>();
  @Output() edit = new EventEmitter<string>();

  onRemove() { this.remove.emit(this.student.id); }
  onEdit() { this.edit.emit(this.student.id); }
}
