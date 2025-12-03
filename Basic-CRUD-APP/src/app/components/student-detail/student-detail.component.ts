import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { ToastService } from '../../services/toast.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit, OnDestroy {
  student: Student | undefined;
  model: Partial<Student> = {};

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService, private toast: ToastService) {}

  ngOnInit(): void {
    // demonstrate a lifecycle hook: we load the student when the component initializes
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.student = this.studentService.getById(id);
      if (this.student) this.model = { ...this.student };
    }
  }

  ngOnDestroy(): void {
    // lifecycle hook - useful for cleanup (subscriptions, timers, etc.)
    // for demo we just log to the console
    // console.log('StudentDetailComponent destroyed');
  }

  save() {
    if (!this.student) return;
    if (this.model.age != null && this.model.age < 0) {
      this.toast.push('Age cannot be negative', 'error');
      return;
    }
    this.studentService.update(this.student.id, this.model);
    this.router.navigateByUrl('/');
    this.toast.push('Student updated', 'success');
  }

  cancel() {
    this.router.navigateByUrl('/');
  }
}
