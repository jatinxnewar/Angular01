import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, StudentFormComponent],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  students$: any;

  constructor(private studentService: StudentService) {
    this.students$ = this.studentService.students$;
  }

  handleAdd(student: any) {
    this.studentService.add(student);
  }

  remove(id: string) {
    this.studentService.remove(id);
  }
}
