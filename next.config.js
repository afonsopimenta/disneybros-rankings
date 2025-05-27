import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);
await jiti.import("./src/env.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    authInterrupts: true,
    dynamicIO: true,
    ppr: true,
    reactCompiler: true,
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
