# React Router RSC + Nitro

This is the example of integrating [Nitro](https://nitro.build/) on React Router RSC for multi platform deployment via [`@hiogawa/vite-plugin-nitro`](https://github.com/hi-ogawa/vite-plugins/tree/main/packages/nitro).

- Vercel https://react-router-rsc-nitro-example.vercel.app/
- Netlify https://react-router-rsc-nitro-example.netlify.app/

Read Nitro's documentation for supported platforms https://nitro.build/deploy

Nitro automatically detects [`preset`](https://nitro.build/config#preset) based on CI/CD environemnt, but it can be also specified manually via plugin options or `NITRO_PRESET` environment, e.g.

```js
export default defineConfig({
  plugins: [
    ...nitro({
      server: {
        environmentName: "rsc",
      },
      config: {
        preset: "vercel",
      },
    }),
  ],
});
```

```sh
NITRO_PRESET=vercel pnpm build
```
