import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'
import classes from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            {/* <div className={classes.gridContainer}> */}
                {/* <div className="gridItem">
                    <Link href={{pathname: "/home" }}
                        className={styles.card}>
                        <Image
                            className={classes.menuIcon}
                            src="/icons/hcbs-48.png"
                            alt="A Ariel"
                            width={33}
                            height={33}
                            priority
                        />
                        <h2>
                        HCBS <span>-&gt;</span>
                        </h2>
                        <p>Manage Home Care Bound Services Program</p>
                    </Link>
                </div> */}
                
                <div className={styles.center}>
                    <Link href={{pathname: "/login" }}>
                        <Image
                        className={styles.logo}
                        src="/A_Ariel_Home_Care_2.png"
                        alt="A Ariel"
                        width={99}
                        height={99}
                        priority
                        />
                        <Image
                        className={styles.logo}
                        src="/A_Ariel_Home_Care_1.png"
                        alt="A Ariel"
                        width={99}
                        height={99}
                        priority
                        />
                    </Link>    
                </div>
                {/* <div className="gridItem">
                    <Link href={{pathname: "/home" }}
                        className={styles.card}>
                        <Image
                            className={classes.menuIcon}
                            src="/icons/ihss-48.png"
                            alt="A Ariel"
                            width={33}
                            height={33}
                            priority
                        />
                        <h2>
                        IHSS <span>-&gt;</span>
                        </h2>
                        <p>Manage In-Home Support Services Program</p>
                    </Link>                    
                </div> */}

                <div className={classes.grid_2}>
                    
                    <Link href={{pathname: "/home" }}
                        className={styles.card}>
                        <Image
                            className={classes.menuIcon}
                            src="/icons/hcbs-48.png"
                            alt="A Ariel"
                            width={33}
                            height={33}
                            priority
                        />
                        <h2>
                        HCBS <span>-&gt;</span>
                        </h2>
                        <p>Manage Home Care Bound Services Program</p>
                    </Link>
                    <Link href={{pathname: "/home" }}
                        className={styles.card}>
                        <Image
                            className={classes.menuIcon}
                            src="/icons/ihss-48.png"
                            alt="A Ariel"
                            width={33}
                            height={33}
                            priority
                        />
                        <h2>
                        IHSS <span>-&gt;</span>
                        </h2>
                        <p>Manage In-Home Support Services Program</p>
                    </Link>
                    
                </div>


                <div className={classes.grid_4}>
                    <Link href={{pathname: "/clients" }}
                        className={styles.card}>
                        <Image
                            className={classes.menuIcon}
                            src="/icons/clients-48.png"
                            alt="A Ariel"
                            width={33}
                            height={33}
                            priority
                        />
                        <h2>
                        Clients <span>-&gt;</span>
                        </h2>
                        <p>Manage clients database</p>
                    </Link>
                    <Link href={{pathname: "/home" }}
                        className={styles.card}>
                        <Image
                            className={classes.menuIcon}
                            src="/icons/pcp-80.png"
                            alt="A Ariel"
                            width={33}
                            height={33}
                            priority
                        />
                        <h2>
                        Providers <span>-&gt;</span>
                        </h2>
                        <p>Manage personal care providers database</p>
                    </Link>
                    
                    <Link href={{pathname: "/home" }}
                        className={styles.card}>
                        <Image
                            className={classes.menuIcon}
                            src="/icons/reports-48.png"
                            alt="A Ariel"
                            width={33}
                            height={33}
                            priority
                        />
                        <h2>
                        Reports <span>-&gt;</span>
                        </h2>
                        <p>Retrive specified data</p>
                    </Link>
                    <Link href={{pathname: "/home" }}
                        className={styles.card}>
                        <Image
                            className={classes.menuIcon}
                            src="/icons/billing-48.png"
                            alt="A Ariel"
                            width={33}
                            height={33}
                            priority
                        />
                        <h2>
                        Billing <span>-&gt;</span>
                        </h2>
                        <p>Manage billing information</p>
                    </Link>
                </div>
            {/* </div> */}

        </main>
        
    )
  }