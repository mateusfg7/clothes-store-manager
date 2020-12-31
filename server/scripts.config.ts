import { DenonConfig } from "https://deno.land/x/denon@2.4.4/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "src/app.ts",
      desc: "run my app.ts file",
      allow: ["net", "read"],
    },
  },

  "watcher": {
    // The number of milliseconds after the last change.
    "interval": 350,
    // The file extensions that it will scan for.
    "exts": ["ts", "env"],
    // The globs that it will scan for.
    "match": ["**/*.*"],
    // The globs that it will not scan for.
    "skip": ["*/.git/*"],
    // Use the legacy file monitoring algorithm. (walking)
    "legacy": false,
  },
};

export default config;
