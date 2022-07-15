import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import eslint from 'vite-plugin-eslint';
import { VitePluginFonts } from 'vite-plugin-fonts';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // svgr для подключения svg файлов внутри компонента
    // import { ReactComponent as ResetSvg } from "./svg.svg";
    svgr({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
    // плагин для подключения google шрифтов
    // font-family: 'Roboto' в css
    VitePluginFonts({
      google: {
        families: ['Roboto'],
      },
    }),
    // compress assets
    // https://github.com/vbenjs/vite-plugin-compression
    viteCompression(),
    // Показывает в консоли все ошибки и предупреждения (как в create-react-app)
    eslint(),
    react(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    esbuildOptions: {},
  },
  build: {
    outDir: 'build',
  },
});
