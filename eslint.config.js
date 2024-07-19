import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import lekko from "@lekko/eslint-plugin";

export default [
  {
    files: ["src/lekko/*.ts"],
    plugins: { lekko: lekko },
    rules: { "lekko/limitations": "error" },
  },
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
