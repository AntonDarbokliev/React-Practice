import { ReactNode, createContext, useEffect, useState } from "react";
import { Item } from "../types/item";

const CartContext = createContext<Item[]>([])


export const CartContextProvider:React.FC<{children: ReactNode}> = ({children}) => {
    const [cartItems, setCartItems] = useState([])

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
        <CartContext.Provider value={cartItems}>
            {children}
        </CartContext.Provider>
    )
}