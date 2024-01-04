import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals:true,
    environment:'jsdom',
    setupFiles: ['resumaker-app/src/tests/setup.js'],
  }
});


