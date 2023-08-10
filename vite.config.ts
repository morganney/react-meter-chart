/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import specifier from 'vite-plugin-specifier'

import type { UserConfig } from 'vite'

const getConfig = (mode: string): UserConfig => {
  return {
    build: {
      lib: {
        formats: ['es', 'cjs'],
        entry: ['src/component.tsx', 'src/colors.ts', 'src/sizing.ts', 'demo.tsx'],
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'styled-components'],
      },
      emptyOutDir: false,
    },
    plugins: [
      react({
        jsxRuntime: 'classic',
      }),
      specifier({
        extMap: {
          '.js': '.mjs',
          '.d.ts': 'dual',
        },
      }),
    ],
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
  }
}

export default defineConfig(({ mode }) => {
  if (mode === 'production') {
    return getConfig(mode)
  }

  return {
    ...getConfig(mode),
    test: {
      css: true,
      globals: false,
      environment: 'jsdom',
      setupFiles: './test.setup.ts',
      include: ['test/*.{ts,tsx}'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'text-summary', 'clover', 'json', 'lcov'],
      },
    },
  }
})
