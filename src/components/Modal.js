import styles from "@styles/components/modal.module.scss"

export default function Modal(props){
    return(
        <div className={styles.modal}>
            <div className={styles.dimmed}></div>
            <div className={styles.content}>
                <div className={styles.head}>
                    <button type="button" 
                        className={styles.close}
                        onClick={() => props.modalHandler()} 
                        title="닫기"
                    >
                        닫기
                    </button>
                </div>
                <div className={styles.body}>
                    모달
                    {props.idx}
                </div>
            </div>
        </div>
    )
}