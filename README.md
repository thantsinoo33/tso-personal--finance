# Myanmar Personal Finance Tracker

A minimalist personal finance tracker built for Myanmar. It features a clean, Material Design‑inspired interface for logging expenses and income, with support for wallets like KBZ Pay, AYA Pay, UAB Pay, and Wave Pay.

## Architecture

- **Frontend**: React with TypeScript, shadcn/ui components, Tailwind CSS, Wouter routing, and React Query for server state.
- **Backend**: Node.js with Express.js, Drizzle ORM, PostgreSQL (Neon), Multer for uploads, and PIN-based auth with bcrypt.
- **Data Model**: Tags, sources, transactions, budgets, transaction tags, and app settings.

For more details, see [replit.md](./replit.md).

## Installation

1. Clone this repo.
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
Start the development server:
```bash
npm run dev
```

### Production
Build the project and run the production server:
```bash
npm run build
npm start
```

Open your browser at http://localhost:3000.
