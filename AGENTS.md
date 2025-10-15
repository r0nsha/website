# Agent Guidelines for Ron's Website

## Commands

- **Build**: `pnpm build` (runs `astro build`)
- **Dev server**: `pnpm dev` (runs `astro dev`)
- **Format**: `pnpm fmt` (runs `prettier --write .`)
- **Preview**: `pnpm preview` (runs `astro preview`)

## Code Style

- **TypeScript**: Strict config with `@astrojs/ts-plugin`
- **Formatting**: Prettier with 4 spaces, semicolons, double quotes, 100 char width, Astro plugin
- **Imports**: Use path aliases `@/*` for `src/*`
- **Components**: Astro components with TypeScript interfaces for props
- **Naming**: Kebab-case for content tags, camelCase for variables/functions
- **Schemas**: Use Zod for content collection validation
- **Error handling**: TypeScript strict mode ensures type safety
