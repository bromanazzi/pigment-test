import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pigment } from "@pigment-css/vite-plugin";
// import { theme } from "@bykom/ui/src/theme/bykom-theme";

export default defineConfig({
  plugins: [pigment({}), react()],
  optimizeDeps: {
    include: ["prop-types", "react-is"],
  },
});
