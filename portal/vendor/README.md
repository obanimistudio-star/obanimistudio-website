# Locally bundled browser dependency

Supabase JavaScript SDK 2.117.3, bundled with esbuild 0.25.12:

```
npm ci
npx esbuild node_modules/@supabase/supabase-js/dist/index.mjs --bundle --format=esm --platform=browser --minify --outfile=supabase.js
```

Pinned dependency metadata and lockfile accompany the bundle. Run the commands in this directory. Do not commit node_modules. Third-party license texts are in THIRD-PARTY-LICENSES.txt. Dependency audit and security tests must be repeated when the bundle changes.
