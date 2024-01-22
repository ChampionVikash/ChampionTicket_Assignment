
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const apiBaseURL = 'https://champion-ticket-assignment-vbxz.vercel.app';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: apiBaseURL,
        secure: false,
      },
    },
  },
  plugins: [react()],
  define: {
    'process.env.API_BASE_URL': JSON.stringify(apiBaseURL),
  },
});
