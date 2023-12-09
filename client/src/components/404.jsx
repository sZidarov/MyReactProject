import styles from "./404.module.css";

export default function NotFound (){
    return (
        <>
        <h1 className={styles.heading}>404</h1>
        <h3 className={styles.secondHeading}>Sorry! Page Not Found...</h3>
        </>
    )
}