/// <reference types="vitest" />

import { defineConfig } from 'vite'
import { resolve } from 'node:path'
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
    test: {},
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/index.ts'),
            name: 'MM3',
            fileName: 'mm3',
            formats: ['es']
        }
    }
})
