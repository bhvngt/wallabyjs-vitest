import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        setupFiles: ["./test/setupTest.ts"],
        globalSetup: ["./test/globalSetup.ts"]
    }
})
