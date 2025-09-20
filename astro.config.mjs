// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [],
    },
    experimental: {
        fonts: [
            {
                provider: fontProviders.fontshare(),
                name: "Satoshi",
                cssVariable: "--font-default",
            },
            {
                provider: fontProviders.fontshare(),
                name: "Clash Display",
                cssVariable: "--font-header",
            },
            {
                provider: "local",
                name: "Iosevka",
                cssVariable: "--font-mono",
                variants: [
                    {
                        weight: 400,
                        style: "normal",
                        src: ["./src/assets/fonts/iosevka-latin-400-normal.woff2"],
                    },
                    {
                        weight: 400,
                        style: "italic",
                        src: ["./src/assets/fonts/iosevka-latin-400-italic.woff2"],
                    },
                    {
                        weight: 700,
                        style: "normal",
                        src: ["./src/assets/fonts/iosevka-latin-700-normal.woff2"],
                    },
                    {
                        weight: 700,
                        style: "italic",
                        src: ["./src/assets/fonts/iosevka-latin-700-italic.woff2"],
                    },
                ],
            },
        ],
    },
});
