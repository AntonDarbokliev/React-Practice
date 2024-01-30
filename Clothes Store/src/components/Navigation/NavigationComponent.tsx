import styles from './Navigation.module.scss'

export const Navigation = () => {
    return (
        <>
        <nav className={styles['main-navigation']}>
            <ul className={styles['main-navigation__ul']}>
                <li className={styles["main-navigation__li"]}>
                    Home
                </li>
                <li className={styles["main-navigation__li"]}>
                    Favourites
                </li>
                <li className={styles["main-navigation__li"]}>
                    About
                </li>
            </ul>
        </nav>
        </>
    )
}