# Overview

This is a minimalist personal finance tracker application designed specifically for Myanmar users. The app provides a clean, Material Design-inspired interface for tracking expenses and income with support for popular Myanmar payment wallets like KBZ Pay, AYA Pay, UAB Pay, and Wave Pay. The application focuses on fast transaction entry, budget tracking, and detailed financial reporting with Myanmar Kyat (MMK) currency support.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **UI Framework**: Combination of shadcn/ui components (Radix UI primitives) with Material Design principles
- **Styling**: Tailwind CSS with custom Material Design theming and dark mode support
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state and React Context for theme/auth state
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database serverless)
- **File Uploads**: Multer middleware for handling transaction receipts/images
- **Authentication**: PIN-based authentication with bcrypt for password hashing
- **API Design**: RESTful API with consistent error handling and logging middleware

## Data Architecture
The application uses a PostgreSQL database with the following core entities:
- **Tags**: Categorization system for transactions (expense/income/both types)
- **Sources**: Payment method tracking (Cash, KBZ Pay, AYA Pay, etc.) with theme colors
- **Transactions**: Core financial records with many-to-many tag relationships
- **Budgets**: Weekly budget tracking with tag-specific or overall scope
- **Transaction Tags**: Junction table for transaction-tag relationships
- **App Settings**: User preferences including PIN authentication

## Authentication System
- **PIN-based Authentication**: Simple 4-digit PIN system for quick access
- **Session Management**: Client-side session storage with automatic logout
- **First-time Setup**: Automatic PIN creation for new users

## User Experience Design
- **Mobile-First**: Responsive design optimized for Myanmar mobile users
- **Material Design**: Google Material UI principles with custom Myanmar wallet theming
- **Dark Mode**: System preference detection with manual toggle capability
- **Keyboard Shortcuts**: Quick access features (A for add transaction, / for search)
- **Progressive Web App**: Configured for offline capability and app-like experience

## File Storage
- **Local Storage**: Transaction receipt images stored in `/uploads` directory
- **Static File Serving**: Express static middleware for serving uploaded files
- **File Validation**: Image type and size restrictions for security

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production
- **Drizzle Kit**: Database migration and schema management tools

## Frontend Libraries
- **Radix UI**: Accessible component primitives for dialog, dropdown, and form components
- **React Query**: Server state management and caching
- **Date-fns**: Date manipulation and formatting utilities
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation and schema definition

## Backend Dependencies
- **bcryptjs**: Password hashing for PIN authentication
- **multer**: File upload handling for transaction receipts
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

## Development Tools
- **TypeScript**: Static typing for both frontend and backend
- **Vite**: Build tool with hot module replacement
- **ESBuild**: Fast JavaScript bundling for production
- **Tailwind CSS**: Utility-first CSS framework

## UI Enhancement
- **Material Icons**: Google Material Design icon font
- **Roboto Font**: Material Design typography
- **Custom CSS Variables**: Theme system supporting light/dark modes and wallet-specific colors

The application architecture prioritizes simplicity, performance, and user experience while maintaining type safety and scalability for Myanmar's mobile-first financial tracking needs.