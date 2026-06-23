# Prisma Using Node

A REST API built with **Express 5** and **Prisma ORM** using SQLite.

## Features
- Create leads with email and name
- Duplicate email validation
- SQLite database with Prisma ORM

## Tech Stack
- Node.js
- Express 5
- Prisma ORM
- SQLite (via better-sqlite3)
- TypeScript

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment
```bash
cp .env.example .env
```

### 3. Generate Prisma Client
```bash
npx prisma generate
```

### 4. Run database migrations
```bash
npx prisma migrate dev
```

### 5. Start the server
```bash
npm run start
```

The server will run at `http://localhost:3004`

## API Endpoints

### POST `/`
Create a new lead.

**Request Body:**
```json
{
  "email": "test@example.com",
  "name": "John"
}
```

**Success Response (200):**
```json
{
  "message": "User created successfully",
  "user": {
    "id": 1,
    "email": "test@example.com",
    "name": "John"
  }
}
```

**Error Responses:**
- `400` — Missing email or name
- `400` — Email already exists
