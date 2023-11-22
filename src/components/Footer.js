import styles from "@styles/components/footer.module.scss"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className="inner">
                <p>Made by <span>MJ</span>❤️</p>
                <p>&copy; 2023 gwonminji.github.io</p>
            </div>
        </footer>
    )
}