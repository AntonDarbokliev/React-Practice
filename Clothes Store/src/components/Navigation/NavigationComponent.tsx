import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

export const Navigation = () => {
    return (
        <>
        <nav className={styles['main-navigation']}>
            <ul className={styles['main-navigation__ul']}>
                <li className={styles["main-navigation__li"]}>
                   <Link to="/">Home</Link> 
                </li>
                <li className={styles["main-navigation__li"]}>
                <Link to="/favourites">Favourites</Link>
                </li>
                <li className={styles["main-navigation__li"]}>
                <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}