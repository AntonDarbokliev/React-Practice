import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { Item } from "../types/item";

export const CartContext = createContext<{cartItems: Item[],setCartItems:Dispatch<SetStateAction<Item[]>>}>({
    cartItems:[],
    setCartItems: () => {},
})


export const CartContextProvider:React.FC<{children: ReactNode}> = ({children}) => {
    const [cartItems, setCartItems] = useState<Item[]>([])

    useEffect(() => {
        let cartString = localStorage.getItem('cart')
        let cart = null;
        if(!cartString){
            localStorage.setItem('cart',"[]")
            cartString = localStorage.getItem('cart')
        }

        cart = JSON.parse(cartString!)
        
        setCartItems(cart)
        
    },[])
    return (
        <CartContext.Provider value={{cartItems,setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}