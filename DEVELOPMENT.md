# Cross-Platform Development Setup

## Node.js Version
Please use Node.js version 18.x or 20.x for consistency.
Check your version: `node --version`

## Package Manager
This project uses npm. Please avoid mixing package managers:
- Use `npm install` (not `yarn install` or `pnpm install`)
- Lock file: `package-lock.json` is committed to the repository

## Development Commands
- `npm start` - Start development server
- `npm test` - Run unit tests
- `npm run build` - Production build

## IDE Setup
### VS Code (Recommended)
Install these extensions for the best experience:
- Angular Language Service
- Prettier - Code formatter
- ESLint

### Platform-Specific Notes
#### Windows Users
- Use Git Bash, PowerShell, or WSL2 for terminal commands
- Ensure Git is configured with `core.autocrlf=false`
- Node.js should be installed via the official installer or nvm-windows

#### macOS/Linux Users
- Terminal should work out of the box
- Consider using nvm for Node.js version management

## Line Endings
This project uses LF line endings consistently across all platforms.
The `.gitattributes` file handles this automatically.
