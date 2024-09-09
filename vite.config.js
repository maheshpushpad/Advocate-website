import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',                   // Bind to all network interfaces
    port: process.env.PORT || 5173,     // Use the PORT environment variable provided by Render, or fall back to 5173
  },
})