import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

import cartIcon from '../../assets/output-onlinepngtools.png'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/cart'

export const Navigation = () => {
    const {cartItems} = useContext(CartContext)
    const [totalItems, setTotalItems] = useState(cartItems.length)

    useEffect(() => {
        setTotalItems(cartItems.length)
    },[cartItems])

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
                <Link to={'/cart'}>
                <img className={styles['cart']} src={cartIcon} alt="" />
                </Link>
                <p>{totalItems}</p>
            </ul>
        </nav>
        </>
    )
}