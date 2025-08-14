import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // No backend proxy needed - using Firebase (Firestore + Auth)
}) 