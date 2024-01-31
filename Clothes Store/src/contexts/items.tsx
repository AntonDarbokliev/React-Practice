import { ReactNode, createContext, useEffect, useState } from 'react'
import items from '../mockData.json'
import { Item } from '../types/item'

interface Context {
    items: Item[],
    getItems():Item[]
}

export const ItemsContext = createContext<Context>({
   items: [],
   getItems: () => []
    
})

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
        <ItemsContext.Provider value={{items,getItems}}>
            {children}
        </ItemsContext.Provider>
    );
} 

