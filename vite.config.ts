import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        dts({
            include: ["src/**/*"],
            outDir: "dist",
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "RiotPlanTemplates",
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
        },
        rollupOptions: {
            external: [
                "@kjerneverk/riotplan",
                "node:fs/promises",
                "node:path",
                "node:os",
                "node:crypto",
                "node:url",
            ],
        },
        outDir: "dist",
        emptyOutDir: true,
    },
});
