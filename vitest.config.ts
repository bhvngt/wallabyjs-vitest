import { defineConfig } from 'vitest/config'

export default defineConfig({
    resolve: {
        alias: {
            "@libs/foo": "./src"
        }
    },
    test: {
        setupFiles: ["./test/setupTest.ts"],
        globalSetup: ["./test/globalSetup.ts"]
    }
})
