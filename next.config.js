/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/n/:slug*",
        destination: "https://jimmylv.noto.so/:slug*",
        permanent: true,
      },
      {
        source: "/info",
        destination:
          "https://jimmylv.feishu.cn/docx/PguGdbTTXo93bExb1docMruNnGd",
        permanent: true,
      },

      // 自媒体
      {
        source: "/b",
        destination: "https://space.bilibili.com/37648256",
        permanent: true,
      },
      {
        source: "/bilibili",
        destination: "https://space.bilibili.com/37648256",
        permanent: true,
      },


      // TODO: add the setapp affiliate link
      {
        source: "/setapp",
        destination: "https://go.setapp.com/invite/syykmooh",
        permanent: true,
      },
      // 知识管理
      {
        source: "/r",
        destination: "https://readwise.io/jimmylv",
        permanent: true,
      },
      {
        source: "/reader",
        destination: "https://readwise.io/jimmylv",
        permanent: true,
      },
      {
        source: "/readwise",
        destination: "https://readwise.io/jimmy",
        permanent: true,
      },

      {
        source: "/it",
        destination: "https://immersivetranslate.com/?code=JQC1HFeP&until=1735578000",
        permanent: true,
      },
      {
        source: "/immersivetranslate",
        destination: "https://immersivetranslate.com/?code=JQC1HFeP&until=1735578000",
        permanent: true,
      },

      {
        source: "/vn",
        destination: "https://voicenotes.com/?via=jimmylv",
        permanent: true,
      },
      {
        source: "/voicenotes",
        destination: "https://voicenotes.com/?via=jimmylv",
        permanent: true,
      },
      {
        source: "/audiopen",
        destination: "https://audiopen.ai?aff=rqAJg",
        permanent: true,
      },
      {
        source: "/typefully",
        destination: "https://typefully.com/?via=jimmylv",
        permanent: true,
      },

      {
        source: "/flomo",
        destination: "https://flomoapp.com/register2/?Mjc3ODQy",
        permanent: true,
      },
      {
        source: "/workflowy",
        destination: "https://workflowy.com/invite/304026f6.lnx",
        permanent: true,
      },

      {
        source: "/sspai",
        destination: "https://sspai.com/prime/subscription?prime_number=314000786",
        permanent: true,
      },
      {
        source: "/tesla",
        destination: "https://www.tesla.cn/referral/jimmyjinglv85292",
        permanent: true,
      },

      // 视频剪辑
      {
        source: "/recut",
        destination: "https://getrecut.com/JimmyLv",
        permanent: true,
      },
      {
        source: "/ss",
        destination: "https://screen.studio/@rqAJg",
        permanent: true,
      },
      {
        source: "/screenstudio",
        destination: "https://screen.studio/@rqAJg",
        permanent: true,
      },

      // 开发相关，云服务
      {
        source: "/zeabur",
        destination:
          "https://zeabur.com?referralCode=JimmyLv",
        permanent: true,
      },
      {
        source: "/railway",
        destination:
          "https://railway.app?referralCode=jimmylv",
        permanent: true,
      },
      {
        source: "/ui",
        destination:
          "https://daisyui.com/store/?aff=rqAJg",
        permanent: true,
      },

      // unused
      {
        source: "/fox",
        destination:
          "https://www.quickfox.com.cn/landingV5?af_channel=cHJvbW90ZXI&af_referrer_customer_id=MTk3NTcz",
        permanent: true,
      },
      {
        source: "/bus",
        destination: "https://universalbus.cn/r?s=pdszpKz2fj",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
