import { Item } from "../../types/item";

export function addToCart(item:Item) {
    const currentCart: Item[] = JSON.parse(localStorage.getItem('cart')!)
    currentCart.push(item)
    const newCart = JSON.stringify(currentCart)
    localStorage.setItem('cart',newCart)
}

export function IsInCart(item: Item){
    const currentCart: Item[] = JSON.parse(localStorage.getItem('cart')!)
    console.log(currentCart)
    for(const currentItem of currentCart ){
        if(currentItem._id === item._id){
            return true
        }
    }
        return false
}