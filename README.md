## Intermittent failed to resolve native modules

Repro:

1. `npm install`
2. `npm run build`

Intermittently, it will give me the following error:

```

[UNLOADABLE_DEPENDENCY] Error: Could not load node_modules/@nx/nx-win32-x64-msvc/nx.win32-x64-msvc.node
    ╭─[ node_modules/nx/src/native/native-bindings.js:96:24 ]
    │
 96 │         return require('@nx/nx-win32-x64-msvc')
    │                        ───────────┬───────────
    │                                   ╰───────────── stream did not contain valid UTF-8
────╯

```

I got this on my Windows (as seen above) and Mac. It seemed to have fixed on Mac after I brew uninstalled node and then reinstalled it.

## Actual Issue Reported

Once you solve that, you should be able to observe the actual issue:

Repro:

1. `npm install`
2. `npm run build`
3. `node dist/index.js`

You should get the following error:

```
Cannot find module './impl/format'
```

on source `const formatter = "require('./impl/format')` from `node_modules/jsonc-parser/lib/umd/main.js` which is marked `@__PURE__` in the dist on my Mac.

I think this dependency is loaded from nx which is cjs?
