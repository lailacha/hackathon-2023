import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src/"),
			"@components": path.resolve(__dirname, "./src/components/"),
			"@utils": path.resolve(__dirname, "./src/utils/"),
			"@public": path.resolve(__dirname, "./public/"),
			"@pages": path.resolve(__dirname, "./src/pages/"),
			"@images": path.resolve(__dirname, "./public/images/"),
		},
	},
});
