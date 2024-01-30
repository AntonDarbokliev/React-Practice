import { ReactNode, createContext, useEffect, useState } from 'react'
import items from '../mockData.json'
import { Item } from '../types/item'

export const ItemsContext = createContext<Item[]>([{
    name : "",
    price: 0,
    images : [],
    materials : [],
    type: ""
    
}])

interface ContextProps {
    children: ReactNode;
}

const getItems = () => {
    return items
}

export const ItemsContextProvider: React.FC<ContextProps> = ({children}) => {
    const [items,setItems] = useState<Item[]>([])

    useEffect(() => {
        const fetchedItems = getItems() 
        setItems(fetchedItems)
    },[])

    return(
        <ItemsContext.Provider value={items}>
            {children}
        </ItemsContext.Provider>
    );
} 

