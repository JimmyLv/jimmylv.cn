/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/info',
        destination: 'https://jimmylv.feishu.cn/docx/PguGdbTTXo93bExb1docMruNnGd',
        permanent: true,
      },{
        source: '/b',
        destination: 'https://space.bilibili.com/37648256',
        permanent: true,
      },{
        source: '/bilibili',
        destination: 'https://space.bilibili.com/37648256',
        permanent: true,
      },
      {
        source: '/fox',
        destination: 'https://www.quickfox.com.cn/landingV5?af_channel=cHJvbW90ZXI&af_referrer_customer_id=MTk3NTcz',
        permanent: true,
      },
      {
        source: '/bus',
        destination: 'https://universalbus.cn/r?s=pdszpKz2fj',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
