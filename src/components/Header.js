import styles from "../scss/header.module.scss"
export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>logo</div>
            <button className={styles.btn}>button</button>
        </header>
    )
}