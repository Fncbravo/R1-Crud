# User Management CRUD Application

A full-stack application built with Next.js, TypeScript, and Tailwind CSS for managing user data.

## Features

- Create, Read, Update, and Delete user records
- Responsive design using Tailwind CSS
- Type-safe development with TypeScript
- Containerized with Docker
- Beautiful UI components from shadcn/ui

## Getting Started

### Prerequisites

- Node.js 18 or later
- Docker

### Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Running with Docker

1. Build the Docker image:
   ```bash
   docker build -t user-management-app .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 user-management-app
   ```

The application will be available at http://localhost:3000

## API Documentation

### User Object

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}
```

### Endpoints

#### GET /api/users
Returns a list of all users.

#### POST /api/users
Creates a new user.

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user"
}
```

#### PUT /api/users/:id
Updates an existing user.

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "admin"
}
```

#### DELETE /api/users/:id
Deletes a user by ID.

## Development

The project uses:
- Next.js for the framework
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for UI components
- Docker for containerization

## License

MIT