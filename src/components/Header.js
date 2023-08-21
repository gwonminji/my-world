import styles from "@styles/components/header.module.scss"
import logo from '@assets/images/logo.png';

export default function Header(){
    return(
        <header className={styles.header}>
            <a href="/">
                <h1 className={styles.logo}>
                    {/* <img src={logo} alt="Hello" /> */}
                    <img src="" alt="Hello" />
                </h1>
            </a>
        </header>
    )
}