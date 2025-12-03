export interface Student {
	id: string;
	name: string;
	email?: string;
	age?: number;
}

export function createStudent(partial: Partial<Student> = {}): Student {
	return {
		id: partial.id ?? String(Date.now()),
		name: partial.name ?? 'Unnamed',
		email: partial.email,
		age: partial.age
	};
}
