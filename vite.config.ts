/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)
import alias from '@rollup/plugin-alias'
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        alias({
            entries: [
              {
                find: 'board',
                replacement: resolve(__dirname, './src/board'),
              }
            ]
          })
    ],
    test: {
        /* for example, use global to avoid globals imports (describe, test, expect): */
        globals: true,
        threads: false,
        environment: 'jsdom',
        alias: {
            board: resolve(__dirname, './src/board'),
        }
    },
});
