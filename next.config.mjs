import { PHASE_EXPORT } from 'next/constants.js';
/**
 * @type {import('next').NextConfig}
 */
const BASE_CONFIG = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
};

const createConfig = async (phase, { defaultConfig }) => {
  if (phase === PHASE_EXPORT) {
    return {...BASE_CONFIG, basePath: '/admiral'}
  }
 return BASE_CONFIG
}

export default createConfig
