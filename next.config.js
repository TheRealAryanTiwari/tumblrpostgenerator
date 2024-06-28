/** @type {import('next').NextConfig} */

const Dotenv = require('dotenv-webpack');


const nextConfig = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  
  reactStrictMode: true,
  swcMinify: true,

  plugins: [
    new Dotenv({
      path: './.env',
    })
  ],

  env: {
    TOGETHER_API_KEY: process.env.TOGETHER_API_KEY,
    REMOTION_AWS_ACCESS_KEY_ID: process.env.REMOTION_AWS_ACCESS_KEY_ID,
    REMOTION_AWS_SECRET_ACCESS_KEY: process.env.REMOTION_AWS_SECRET_ACCESS_KEY,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    TOGETHER_API_KEY: process.env.TOGETHER_API_KEY,
    ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
    AWS_REGION_NAME: process.env.AWS_REGION_NAME,
    AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,
  },
};

module.exports = nextConfig;
