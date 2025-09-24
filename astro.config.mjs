// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import { h } from "hastscript";
import { transformerNotationDiff } from "@shikijs/transformers";
import modusVivendi from "./modus-vivendi.mjs";

/**
 * @returns {import("shiki").ShikiTransformer}
 **/
export const transformerCopyButton = () => ({
    name: "shiki-transformer-copy-button",
    pre(node) {
        const label = "Copy";
        const button = h(
            "button",
            {
                class: "copy-code",
                "data-code": this.source,
                onclick: `
                    async function copyCode(btn, originalLabel, delayMs) {
                        await navigator.clipboard.writeText(btn.dataset.code);
                        btn.innerText = 'Copied!';
                        btn.disabled = true;
                        setTimeout(() => {
                            btn.innerText = '${label}';
                            btn.disabled = false;
                        }, delayMs);
                    }

                    copyCode(this, '${label}', 1000);
                `,
            },
            [label]
        );

        node.children.push(button);
    },
});

export default defineConfig({
    vite: {
        plugins: [],
    },
    integrations: [icon(), mdx()],
    markdown: {
        remarkPlugins: [],
        shikiConfig: {
            theme: modusVivendi,
            wrap: false,
            transformers: [
                transformerCopyButton(),
                transformerNotationDiff({ matchAlgorithm: "v3" }),
            ],
        },
    },
    experimental: {
        fonts: [
            {
                provider: fontProviders.fontshare(),
                name: "Satoshi",
                cssVariable: "--font-default",
            },
            {
                provider: fontProviders.bunny(),
                name: "Space Grotesk",
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
