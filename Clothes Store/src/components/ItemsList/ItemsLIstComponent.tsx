import { useContext } from 'react'
import { ItemsContext } from '../../contexts/items'
import styles from './ItemsList.module.scss'
import { ItemCard } from '../ItemCard/ItemCardComponent'
export const ItemsList = () => {
const {items} = useContext(ItemsContext)


return (
        <>
        <ul className={styles['items-list']}>
            {items.map((item) => {
                return <ItemCard item={item} key={item._id}/>
            })}
        </ul>
        </>
    )
}