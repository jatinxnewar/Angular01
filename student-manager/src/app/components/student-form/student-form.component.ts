
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  @Output() add = new EventEmitter<Partial<Student>>();

  model: Partial<Student> = { name: '', email: '', age: undefined };

  submit() {
    if (!this.model.name) return;
    this.add.emit(this.model);
    this.model = { name: '', email: '', age: undefined };
  }
}
