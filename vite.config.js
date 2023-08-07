import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ecsstatic from "@acab/ecsstatic";

export default defineConfig({
    plugins: [react(), ecsstatic()],
});