import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Landing_Page_Vokativa/', // 👈🏻 muy importante: usa el nombre exacto de tu repositorio
  plugins: [react()],
})
