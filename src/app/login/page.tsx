"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from '../page.module.css'
import classes from './page.module.css'

export default function Login() {
    const router = useRouter()
    const handleSubmit = (e: any) => {
        e.preventDefault()
        router.push("/home")
    }

    return (
        <main className={styles.main}>
            {/* <h3>Login</h3> */}
            <div className={styles.center}>
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
            </div>
            <div id="formContainer" className={classes.formContainer}>
                <form id="login" className={classes.form} onSubmit={handleSubmit}>
                    <a href="#" id="flipToRecover" className={classes.flipLink}>A Ariel Home Care</a>
                    <input type="text" name="loginEmail" id="loginEmail" placeholder="Email" />
                    <input type="password" name="loginPass" id="loginPass" placeholder="Password" />
                    <input type="submit" name="submit" value="Login" />
                </form>
                {/* <form id="recover" method="post" action="/">
                    <a href="#" id="flipToLogin" className={classes.flipLink}>Admin?</a>
                    <input type="text" name="recoverEmail" id="recoverEmail" placeholder="Your Email" />
                    <input type="submit" name="submit" value="Recover" />
                </form> */}
            </div>

        </main>
        
    )
  }