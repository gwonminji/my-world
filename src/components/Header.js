import styles from "@styles/components/header.module.scss"
import logo from '@assets/images/logo.png';

export default function Header(){
    return(
        <header className={styles.header}>
            {/* <div className={styles.inner}> */}
                <a href="/">
                    <h1 className={styles.logo}>
                        {/* <img src={logo} alt="" /> */}
                        <img src="" alt="Hello" />
                    </h1>
                </a>
                {/* <button className={styles.btn}>button</button> */}
            {/* </div> */}
        </header>
    )
}