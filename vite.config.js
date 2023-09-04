import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://tatianayuryeva.github.io/react-menu/',
  plugins: [react()],
})
