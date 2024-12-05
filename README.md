# Vue3 | Nuxt 3 | Storybook v8 | Histoire | Mono-/Turborepo starter with pnpm

<p align="center" class="unchanged rich-diff-level-one">
    <a href="https://github.com/pnpm/pnpm" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=pnpm&color=222222&logo=pnpm&logoColor=F69220&label=">
    </a>
    <a href="https://vitejs.dev" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vite&color=646CFF&logo=Vite&logoColor=FFFFFF&label=">
    </a>
    <a href="https://github.com/vuejs/core" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vue.js&color=222222&logo=Vue.js&logoColor=4FC08D&label=">
    </a>
    <a href="https://nuxtjs.org" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Nuxt.js&color=222222&logo=Nuxt.js&logoColor=00DC82&label=">
    </a>
    <a href="https://tailwindcss.com/" target="_blank">
        <img src="https://img.shields.io/badge/tailwind-000.svg?style=for-the-badge&logo=tailwindcss&logoColor=white&color=37bdf8">
    </a>
    <a href="https://github.com/storybooks/storybook" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Storybook&color=FF4785&logo=Storybook&logoColor=FFFFFF&label=">
    </a>
    <a href="https://github.com/vercel/turborepo" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Turborepo&color=000000&logo=Vercel&logoColor=FFFFFF&label=">
    </a>
</p>

## What's inside?

This project is a fork of [samydoesit/vue-turbo-starter](https://github.com/samydoesit/vue-turbo-starter), I prefer using Tailwind CSS for my works, so I’ve adapted it to fit my needs.
This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Apps and Packages

- `nuxt`: another [Nuxt3](https://nuxtjs.org) app - https://localhost:3000/
- `storybook`: another [Storybook](https://storybook.js.org/) - https://localhost:6006/
- `histoire`: [Histoire](https://histoire.dev/) - https://localhost:6007/
- `ui`: a stub Vue component library shared by `nuxt`, `vite` and `storybook` applications
- `config`: `eslint` configurations (includes [nuxt/eslint-config](https://github.com/nuxt/eslint-config) standardjs flavor)
<!-- - `tsconfig`: `tsconfig.json`s used throughout the monorepo -->

Each package/app is [TypeScript](https://www.typescriptlang.org/) ready.

uses:
- pnpm
- turborepo
- vue 3
- nuxt 3
- vite 5
- storybook v8
- Tailwind
- Vitest
- playwright for e2e tests
- histoire

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/yoyoys/nuxt-monorepo-starter/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit yoyoys/nuxt-monorepo-starter my-nuxt-monorepo
cd my-nuxt-monorepo
pnpm i # If you don't have pnpm installed, run: `corepack enable` (or use `npm i -g corepack` for Node.js < 20)
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change `App.vue`
- [ ] Change/Edit `vite.config.ts` | `nuxt.config.ts`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove demo content

## 💻 Development
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 20)
- Install dependencies using `pnpm install`
- Run development servers `pnpm dev`

## 🚀 Build
- Build for production `pnpm build`

## Docker Container
- To build docker images it is necessary to pass monorepo root as context.

```bash
cd <repo-root>
# Storybook Dockerfile
docker build -f apps/storybook/Dockerfile .
docker run -d -p 6006:6006 <image-id>
# Histoire Dockerfile
docker build -f apps/histoire/Dockerfile .
docker run -d -p 6006:6006 <image-id>
# Nuxt Dockerfile
docker build -f apps/nuxt/Dockerfile .
docker run -d -p 3000:3000 <image-id>
```
