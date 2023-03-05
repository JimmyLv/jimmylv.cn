/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/info',
        destination: 'https://jimmylv.feishu.cn/docx/PguGdbTTXo93bExb1docMruNnGd',
      },
    ]
  },
}

module.exports = nextConfig
