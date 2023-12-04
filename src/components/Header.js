import styles from "@styles/components/header.module.scss"

import logo from '@assets/images/logo.png';

export default function Header(){
    return(
        <header className={styles.header}>
            <a href="/" title="메인으로 이동">
                <h1 className={styles.logo}>
                    <img src={logo} alt="MJ" />
                </h1>
            </a>
        </header>
    )
}