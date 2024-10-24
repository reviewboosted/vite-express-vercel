# Vite-Express-Vercel Starter Kit

A starter template for building and deploying a Vite + React + Express application on Vercel. This project demonstrates how to set up a full-stack JavaScript application with a modern frontend and backend.

## What's Here?

- A minimal setup for a Vite-based React app leveraging an Express-based server.

- A simple route to show you how to connect the two ports via server proxy.

- Config changes you need to make for Vite and Vercel to make this work.

## Prerequisites

- Node.js (version 14+)
  - I've personally run into issues using v23, so I would stick to the latest LTS version.
- npm

## Installation

1. Clone the repo:

```bash
git clone https://github.com/internetdrew/vite-express-vercel.git
cd vite-express-vercel
```

2. Install dependencies for both client and server

```bash
npm install
cd server && npm install
```

## Development

To start the development server for both the client and the server, run:

```bash
npm run dev
```

This will concurrently start the Vite development server and the Express server.

## Build

To build the project for production, run:

```bash
npm run build
```

This will compile the TypeScript files and bundle the frontend assets.

## Configuration

These are the configuration aspects that matter most, at a quick glance.

### Vite Configuration

This is located in `vite.config.ts` for customizing Vite settings:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:3000`,
        changeOrigin: true,
      },
    },
  },
});
```

### Vercel Configuration

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/api/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "rewrites": [
    { "source": "/api/:path*", "destination": "/server/api/index.ts" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
