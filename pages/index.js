import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// https://www.youtube.com/@jimmy_jinglv/?sub_confirmation=1
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>吕立青_JimmyLv</title>
        <meta name="description" content="吕立青的个人主页" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Reach me
            <a href="mailto:jimmy.jinglv@gmail.com" target="_blank"><code className={styles.code}>📧 Email</code></a>
          </p>
          <div>
            <a
              href="https://github.com/JimmyLv/jimmylv.cn"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <h1>JimmyLv</h1>
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1 className={styles.logo}>AI = </h1>
          <div className={styles.thirteen}>
            <h1>All In</h1>
          </div>
        </div>
        <h1 className={styles.slogan}>Prompt, Publish, Profit</h1>

        <div className={styles.grid}>
          <a
            href="https://twitter.com/Jimmy_JingLv"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Twitter <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Quick find immature ideas from JimmyLv.
            </p>
          </a>

          <a
            href="https://space.bilibili.com/37648256"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Video <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn more about JimmyLv in interactive videos!
            </p>
          </a>

          <a
            href="https://blog.jimmylv.info"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Article <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover more in-depth content from JimmyLv.
            </p>
          </a>

          <a
            href="https://jimmylv.substack.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Newsletter <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get the latest news on AI application development.
            </p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
          <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2023004627号</a>
      </footer>
    </>
  )
}
