import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1',  // or use '0.0.0.0' to listen on all interfaces
    port: 3000
  },
  plugins: [react()],
})

