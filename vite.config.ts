import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // This enables global access to expect, test, etc.
    environment: "jsdom",
    setupFiles: "./setupTests.ts", // This simulates a browser environment
  },
});
