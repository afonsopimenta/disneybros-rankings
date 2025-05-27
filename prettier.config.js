/** @type {import("prettier").Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig & import("prettier-plugin-tailwindcss").PluginOptions} */
const prettierConfig = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "",
    "^react($|/)",
    "^next($|/)",
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "",
    "^~/",
    "^[.]",
  ],
  importOrderTypeScriptVersion: "5.0.0",
  tailwindStylesheet: "./src/styles/globals.css",
};

export default prettierConfig;
