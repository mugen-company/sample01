/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/,
      type: 'asset/source', // raw-loaderの代わりにasset/sourceを使用
      use: ['glslify-loader'],
    });
    return config;
  },
  output: "export",
  images: {
    unoptimized: true, // 画像最適化を無効化
  },
};

export default nextConfig;
