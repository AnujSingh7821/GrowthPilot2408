import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "./",   // 👈 yahi add karna tha
  plugins: [react(), tailwindcss()],
})