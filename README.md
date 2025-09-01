# Handin1

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Prerequisites

- Node.js 18.x or 20.x
- npm (comes with Node.js)
- Git

## Quick Setup

### Option 1: Automated Setup (Recommended)
Run the setup script to configure everything automatically:

```bash
# macOS/Linux/WSL
./setup.sh

# Windows (Git Bash)
bash setup.sh
```

### Option 2: Manual Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure Git for cross-platform development:
   ```bash
   git config core.autocrlf false
   git config core.eol lf
   ```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Cross-Platform Development

This project is configured for seamless collaboration between macOS, Windows, and Linux:

- **Line endings**: Automatically handled by `.gitattributes`
- **Node.js**: Use version 18.x or 20.x for consistency
- **Package manager**: Use npm only (avoid mixing with yarn/pnpm)
- **Development setup**: See `DEVELOPMENT.md` for platform-specific notes

### Windows Users
- Use Git Bash, PowerShell, or WSL2
- Ensure Git is configured with `core.autocrlf=false`
- Run `bash setup.sh` for automated setup

### macOS/Linux Users  
- Terminal works out of the box
- Run `./setup.sh` for automated setup
