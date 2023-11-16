import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'
import classes from './page.module.css'

import Dtable from '../components/display_tables/Dtable'

import {PROVIDERS} from '../api/db'


export default function Providers() {
    return (
        <main className={classes.main + ' ' + styles.main}>
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
                <div className={classes.rightLogo}>
                    <Image
                        // className={styles.logo}
                        src="/icons/user-24.png"
                        alt="User"
                        width={33}
                        height={33}
                        priority
                    />
                    <p>Admin</p>
                </div>
            </div>
            <Dtable clients={[]} providers = {PROVIDERS} route={'providers'} imgSource={'/icons/pcp-80.png'} />

        </main>
        
    )
  }