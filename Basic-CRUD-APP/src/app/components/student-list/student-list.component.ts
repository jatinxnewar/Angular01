import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentService } from '../../services/student.service';
// RouterLink is used inside StudentCardComponent; no direct RouterLink import needed here
import { BehaviorSubject, combineLatest, map, take } from 'rxjs';
import { StudentCardComponent } from '../student-card/student-card.component';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, StudentFormComponent, StudentCardComponent],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  private search$ = new BehaviorSubject<string>('');
  students$ = this.studentService.students$;
  pageSize = 12;
  private page$ = new BehaviorSubject<number>(1);
  totalPages$ = combineLatest([this.students$, this.search$]).pipe(
    map(([list, q]) => {
      const term = (q || '').trim().toLowerCase();
      const filtered = term ? list.filter(s => s.name.toLowerCase().includes(term)) : list;
      const pages = Math.max(1, Math.ceil(filtered.length / this.pageSize));
      return pages;
    })
  );
  private sort$ = new BehaviorSubject<string>('name');

  filtered$ = combineLatest([this.students$, this.search$, this.page$, this.sort$]).pipe(
    map(([list, q, page, sort]) => {
      const term = (q || '').trim().toLowerCase();
      let filtered = term ? list.filter(s => s.name.toLowerCase().includes(term)) : [...list];
      // apply sort
      if (sort === 'age') filtered.sort((a, b) => (a.age || 0) - (b.age || 0));
      else filtered.sort((a, b) => a.name.localeCompare(b.name));
      // apply pagination
      const start = (page - 1) * this.pageSize;
      return filtered.slice(start, start + this.pageSize);
    })
  );

  constructor(private studentService: StudentService, private toast: ToastService) {}

  handleAdd(student: any) {
    if (student.age != null && student.age < 0) {
      this.toast.push('Age cannot be negative', 'error');
      return;
    }
    const s = this.studentService.add(student);
    this.toast.push(`Added ${s.name}`, 'success');
    this.page$.next(1);
  }

  remove(id: string) {
    const ok = confirm('Remove this student?');
    if (!ok) return;
    this.studentService.remove(id);
    this.toast.push('Student removed', 'info');
  }

  onSearch(value: string) {
    this.page$.next(1); // reset paging on new search
    this.search$.next(value || '');
  }

  nextPage() {
    this.totalPages$.pipe(take(1)).subscribe(tp => {
      const p = this.page$.getValue() || 1;
      if (p < tp) this.page$.next(p + 1);
    });
  }

  prevPage() {
    const p = this.page$.getValue();
    if (p > 1) this.page$.next(p - 1);
  }
  onSort(value: string) { this.sort$.next(value || 'name'); }
  get page() { return this.page$.getValue(); }
}
