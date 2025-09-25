# React Router RSC + Nitro

This is the example of integrating [Nitro](https://nitro.build/) on React Router RSC for multi platform deployment via [`@hiogawa/vite-plugin-nitro`](https://github.com/hi-ogawa/vite-plugins/tree/main/packages/nitro).

Read Nitro's documentation for supported platforms https://nitro.build/deploy

You can speficy [`preset`](https://nitro.build/config#preset) via plugin options or `NITRO_PRESET` environment, e.g.

```js
export default defineConfig({
  plugins: [
    ...
    nitro({
      server: {
        environmentName: "rsc",
      },
      config: {
        preset: "vercel",
      }
    })
  ],
});
```

```sh
NITRO_PRESET=vercel pnpm build
```
