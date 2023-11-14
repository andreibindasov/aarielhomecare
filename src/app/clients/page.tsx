import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'
import classes from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={classes.navWrkPanel}>
                <div className={classes.leftLogo}>
                    <Link href={{pathname: "/home" }}>
                        <Image
                        className={styles.logo}
                        src="/A_Ariel_Home_Care_2.png"
                        alt="A Ariel"
                        width={66}
                        height={66}
                        priority
                        />
                        <Image
                        className={styles.logo}
                        src="/A_Ariel_Home_Care_1.png"
                        alt="A Ariel"
                        width={66}
                        height={66}
                        priority
                        />
                    </Link>    
                </div>
                <div>
                    Username: Hursheda
                </div>
            </div>
            

        </main>
        
    )
  }