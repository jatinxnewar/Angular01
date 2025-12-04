Very Basic Components (Angular demo)

This folder demonstrates the smallest Angular app to explore component basics:
- component creation and filenames
- selectors (`<app-root>`, `<hello-world>`, `<color-box>`)
- templates and styles (`.html` and `.css` files)
- inputs (`@Input()` for passing data into components)

Files created:
- `package.json` — minimal scripts to start via `npx @angular/cli`
- `angular.json`, `tsconfig.json` — minimal Angular workspace config
- `src/main.ts` — bootstraps `AppModule`
- `src/app/app.module.ts` — declares components and bootstraps the app
- `src/app/app.component.*` — parent component using other components
- `src/app/hello-world.component.*` — simple component showing selector and input
- `src/app/color-box.component.*` — component demonstrating styling and inputs

Run (PowerShell):

```powershell
cd .\very-basic-components
npm install
npm run start
```

Notes:
- If you prefer not to install global Angular CLI, the `start` script uses `npx`.
- After `npm install`, `npm run start` will open a browser to the app.

If you want, I can:
- run `npm install` here (I won't run long installs without your permission),
- or convert this into a generated Angular CLI project using `ng new` so all configs match the CLI defaults.
