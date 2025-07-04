import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  resolve: {
    alias: {
      '@': '/src', // Beispiel: `@/components` wird zu `/src/components`
    },
  },
});
