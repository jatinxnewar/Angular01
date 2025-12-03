import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student, createStudent } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private readonly storageKey = 'basic-crud-students';

  private studentsSub = new BehaviorSubject<Student[]>(this.loadFromStorage() ?? [
    createStudent({ id: '1', name: 'Alice', email: 'alice@example.com', age: 20 }),
    createStudent({ id: '2', name: 'Bob', email: 'bob@example.com', age: 22 })
  ]);

  get students$(): Observable<Student[]> {
    return this.studentsSub.asObservable();
  }

  add(student: Partial<Student>) {
    const current = this.studentsSub.getValue();
    const s = createStudent(student);
    this.studentsSub.next([...current, s]);
    this.saveToStorage();
    return s;
  }

  remove(id: string) {
    const current = this.studentsSub.getValue();
    this.studentsSub.next(current.filter((s) => s.id !== id));
    this.saveToStorage();
  }

  getById(id: string): Student | undefined {
    return this.studentsSub.getValue().find((s) => s.id === id);
  }

  update(id: string, patch: Partial<Student>): Student | undefined {
    const current = this.studentsSub.getValue();
    let updated: Student | undefined;
    const next = current.map((s) => {
      if (s.id === id) {
        updated = { ...s, ...patch };
        return updated;
      }
      return s;
    });
    this.studentsSub.next(next);
    this.saveToStorage();
    return updated;
  }

  private loadFromStorage(): Student[] | null {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return null;
      return JSON.parse(raw) as Student[];
    } catch {
      return null;
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.studentsSub.getValue()));
    } catch {
      // errors, if any
    }
  }
}
