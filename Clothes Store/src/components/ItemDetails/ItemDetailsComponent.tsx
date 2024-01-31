import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemsContext } from "../../contexts/items"
import { Item } from "../../types/item"

export const ItemDetails = () => {

    const [item, setItem ] = useState<Item>()
    const urlParams = useParams()
    
    const { getItems } = useContext(ItemsContext) 

    useEffect(() => {
        const currentItems = getItems().find(x => x._id === Number(urlParams.itemId))

        setItem(currentItems)
    },[getItems,urlParams.itemId])

    return (
        <h1>{item?.name}</h1>
        
    )
}