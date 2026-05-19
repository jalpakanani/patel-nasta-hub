import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** Config ફાઇલનો ફોલ્ડર — parent dirs માં extra lockfile હોય ત્યારે cwd કરતાં વધુ ભરોસાપાત્ર */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /**
   * Parent directory માં `yarn.lock` વગેરે હોય તો Turbopack ખોટું root પસંદ કરી લેતું હોય છે
   * (જેમ કે `~/yarn.lock`), પછી routes / app ઢાળશે અને દરેક URL પર 404 આવે.
   */
  turbopack: {
    root: projectRoot,
  },
  /** સ્ટેટિક `out/` ફોલ્ડર — `npm run build` પછી દેખાશે */
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
