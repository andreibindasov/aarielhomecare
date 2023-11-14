import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>A Ariel</code>
          &nbsp;Home Care Agency Portal
        </p>
        <div>
          <a
            href="https://andreibindasov.pythonanywhere.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{': andrei: bindasov '}
            <Image
              src="/_svarog.png"
              alt="andrei bindasov"
              className={styles.vercelLogo}
              width={33}
              height={33}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/A_Ariel_Home_Care_2.png"
          alt="A Ariel"
          width={180}
          height={180}
          priority
        />
        <Image
          className={styles.logo}
          src="/A_Ariel_Home_Care_1.png"
          alt="A Ariel"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href={{pathname: "/login" }}
              className={styles.card}>
          {/* <a
            
            rel="noopener noreferrer"
          > */}
            <h2>
              Enter Portal <span>-&gt;</span>
            </h2>
            <p>Make sure you have all credentials available to get started</p>
          {/* </a> */}
        </Link>
        
      </div>
    </main>
  )
}
