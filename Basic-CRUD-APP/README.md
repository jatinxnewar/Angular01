# Basic CRUD App (Angular)

This is a minimal Angular standalone-component example demonstrating basic CRUD for a Student model.

How to run

1. Open PowerShell in this folder:

```powershell
cd 'c:\Users\asus\Downloads\Angular01\Basic-CRUD-APP'
npm install
npm start
```

2. Open http://localhost:4200

What is included

- Root `AppComponent` (standalone) and router config in `src/app`.
- `StudentService` (in-memory) exposes students via a `BehaviorSubject`.
- `StudentListComponent` shows list of students and allows add/remove and search.
- `StudentFormComponent` is a small template-driven form to create a student (with simple validation).
- `StudentDetailComponent` edits an existing student.

Concepts used (simple):

- Components: small, focused UI pieces (list, form, detail). Each component has a template (HTML), styles (SCSS) and logic (TypeScript).
- Standalone components: components that work without NgModules using `standalone: true` and explicit `imports`.
- Services & DI: `StudentService` holds shared state (students) and is injected into components via constructor parameters. This decouples data logic from UI.
- Observables: the service exposes a `BehaviorSubject` which components consume as an `Observable` (`students$`). Templates use the `async` pipe to subscribe and render values reactively.
- Routing: `app.routes.ts` maps URLs to components. We use `loadComponent` to lazy-load standalone components for list and edit pages.
- Template binding: interpolation (`{{ value }}`), event binding (`(click)`), and two-way binding (`[(ngModel)]`) are used to connect UI and component state.
- Forms: template-driven forms (FormsModule, `ngModel`) used for simple input and validation checks. Basic required validation is shown in the form.

How the pieces work together (simple flow):

1. `main.ts` bootstraps `AppComponent` with `appConfig` that provides the router.
2. Router loads `StudentListComponent` at `/`. That component injects `StudentService` and subscribes to `students$`.
3. `StudentFormComponent` emits new student objects via an `@Output()` event which the list component handles and passes to `StudentService.add()`.
4. `StudentService` updates the in-memory `BehaviorSubject`. Because components subscribe to that observable, the UI updates automatically.
5. Clicking `Edit` navigates to `/edit/:id` which lazy-loads `StudentDetailComponent`, retrieves the student by id, and calls `StudentService.update()` to save changes.

If you want, I can next:
- Add unit tests (Jasmine/Karma) for `StudentService`.
- Add persistence (HttpClient) and a simple mock backend.
- Improve styling using a UI library (Tailwind/Bootstrap) or more polished SCSS.

