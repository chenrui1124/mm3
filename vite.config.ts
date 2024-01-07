/// <reference types="vitest" />

import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({
            rollupTypes: true,
            staticImport: true,
            insertTypesEntry: true,
            include: ['lib/**/*'],
            exclude: ['vite.config.ts']
        })
    ],

    resolve: {
        alias: { '@': fileURLToPath(new URL('./lib', import.meta.url)) }
    },

    test: {
        alias: { '@': new URL('./lib/index.ts', import.meta.url).pathname }
    },

    build: {
        lib: {
            entry: resolve(__dirname, 'lib/index.ts'),
            name: 'MM3',
            fileName: 'mm3',
            formats: ['es']
        }
    }
})
