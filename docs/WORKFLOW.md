# Development Workflow

## Branching Strategy
- `main` – production-ready code
- `dev` – active development
- `feature/*` – new features
- `hotfix/*` – urgent fixes

## CI/CD (Optional)
- Use GitHub Actions workflow to lint, test, and build frontend/backend.
- Automatically deploy frontend to Vercel or Render (optional).
- Backend API can be deployed to Render, Railway, or local server.

## Testing
- Frontend: Jest + React Testing Library
- Backend: pytest
- ML models: unit tests for inference and preprocessing
