import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student, createStudent } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
	private studentsSub = new BehaviorSubject<Student[]>([
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
		return s;
	}

	remove(id: string) {
		const current = this.studentsSub.getValue();
		this.studentsSub.next(current.filter((s) => s.id !== id));
	}
}
