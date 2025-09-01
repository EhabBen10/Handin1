# GitHub Copilot Instructions for handin1

## Project Overview
This is a modern Angular 20 application configured with **zoneless change detection** and **signals-based state management**. The project follows Angular's latest standalone component architecture without NgModules.

## Key Architecture Patterns

### Component Structure
- **Standalone components only**: All components use `imports: []` array instead of NgModules
- **Signals for state**: Use `signal()` for reactive state (see `App.title = signal('handin1')`)
- **Class naming**: Main app component is named `App`, not `AppComponent`
- **Protected readonly properties**: Use `protected readonly` for template-accessible properties

### Styling & Design System
- **SCSS-first**: All styles use `.scss` extension, configured in `angular.json`
- **Component-scoped styles**: Each component has its own `.scss` file
- **Navigation patterns**: Uses gradient button styles with active states (`.button` + `.activebutton`)
- **Prettier integration**: Configured with 100 char line width and single quotes

### Configuration Files
- **Zoneless change detection**: Enabled in `app.config.ts` with `provideZonelessChangeDetection()`
- **Global error handling**: Uses `provideBrowserGlobalErrorListeners()` in app config
- **Strict TypeScript**: All strict compiler options enabled in `tsconfig.json`
- **Bundle budgets**: Production builds limited to 500kB initial, 4kB component styles

## Development Workflows

### Commands
- `npm start` or `ng serve` - Development server (default port 4200)
- `ng generate component component-name` - Creates standalone component with SCSS
- `ng build` - Production build with optimization
- `ng test` - Karma unit tests

### Navigation Structure
The app uses a three-screen navigation pattern:
- Home screen (`/zone` route)
- Transactions screen (`/temperature` route) 
- Card screen (`/rxjs` route)

Routes are defined in `app.routes.ts` and navigation in `app.component.html` navbar.

## Project-Specific Conventions

### File Organization
- Main app in `src/app/` with flat structure
- Public assets in `public/` directory (Angular 20+ pattern)
- TypeScript configs split: `tsconfig.json` (base) → `tsconfig.app.json` + `tsconfig.spec.json`

### Code Style
- Use signals instead of BehaviorSubject for simple state
- Prefer `protected readonly` for template properties
- Import standalone components directly in component `imports` array
- Bootstrap application with `bootstrapApplication()` in `main.ts`

## Integration Points
- **Router**: Angular Router with standalone routing configuration
- **Change Detection**: Zoneless - rely on signals and explicit change detection
- **Build System**: Angular's new application builder (`@angular/build:application`)
