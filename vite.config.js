import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/Quiz-App/",
  // server: {
  //   host: '172.16.2.114', // This makes Vite accessible on your local network
  //   port: 3000, // Aapka port, jo bhi aap use kar rahe hain (default 5173 hota hai)
  // }
})
