import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'your-repo-name' with your actual GitHub repository name
// e.g., if your repo is github.com/vinotht/portfolio → base: "/portfolio/"
export default defineConfig({
  plugins: [react()],
  base: "github.com/hivinoth8/portfolio", // ← UPDATE THIS to match your GitHub repo name
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
