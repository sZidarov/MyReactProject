import styles from "./PopUpReservation.module.css";

export default function PopupReservation(props) {
    return props.trigger ? (
        <div className={styles.popupRes}>
            <div className={styles.popupInner}>
                <button
                    onClick={() => {
                        props.setIsConfirmed(true);
                        props.setTrigger(false);
                    }}
                    className={styles.confirmBtn}
                >
                    Confim
                </button>
                <button
                    onClick={() => props.setTrigger(false)}
                    className={styles.closeBtn}
                >
                    Close
                </button>
                {props.children}
            </div>
        </div>
    ) : (
        ""
    );
}
