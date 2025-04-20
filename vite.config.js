import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon-192x192.png', 'icons/icon-512x512.png'],
      manifest: {
        name: 'Покупки',
        short_name: 'Покупки',
        description: 'Твоето приложение за покупки',
        theme_color: '#ffffff',
        background_color: '#fdfdfd',
        display: 'standalone',
        start_url: './',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      }
    })
  ],
  base: './',
  build: {
    outDir: 'docs',
  }
});
