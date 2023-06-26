import styles from "@styles/components/header.module.scss"

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.logo}>hello</div>
                <button className={styles.btn}>button</button>
            </div>
        </header>
    )
}