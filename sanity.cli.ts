/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import tsconfigPaths from "vite-tsconfig-paths";
import { loadEnvConfig } from "@next/env";
import { defineCliConfig } from "sanity/cli";
const dev = process.env.NODE_ENV !== "production";
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error });

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  vite: {
    server: {
      cors: false,
      headers: {
        "access-control-allow-credentials": "true",
      },
      origin: "http://localhost:3333",
      host: "localhost",
    },
    plugins: [tsconfigPaths()],
  },
});
