import { releaseVersion } from "nx/release";

const version = releaseVersion({});

// If you get it to build, run the file with `node dist/index.js` and you should get the following:

// Cannot find module './impl/format'
// on source
//   const formatter = "require('./impl/format')
// from node_modules/jsonc-parser/lib/umd/main.js which is marked @__PURE__

// I think it's loaded from nx which is cjs?
