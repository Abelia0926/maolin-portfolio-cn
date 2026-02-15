import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/maolin-portfolio-cn/',   // 👈 关键：改成你的仓库名
  plugins: [
    react(),
    tailwindcss(),
  ],
})