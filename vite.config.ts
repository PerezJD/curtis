import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import suidPlugin from '@suid/vite-plugin';

export default defineConfig({
  plugins: [
    // devtools(),
    suidPlugin(),
    solidPlugin(),
  ],
  server: {
    port: 8080,
  },
  build: {
    target: 'esnext',
  },
});
