import { Link } from 'react-router-dom'
import { Item } from '../../types/item'
import styles from './ItemCard.module.scss'

export const ItemCard:React.FC<{item : Item}> = ({item}) => {
    return (
        <Link to={`/${item._id}`} style={{textDecoration: 'none', color: 'inherit' }}>
            <li className={styles['item-card']}>
                <img src={item.images[0]} alt="Clothing image" />
                <p>{item.name}</p>
                <p>{item.type}</p>
            </li>
        </Link>
    )
}