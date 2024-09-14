import { Product } from "../interfaces/Product"
import Cart from "../interfaces/Cart"
import { createContext } from "react"

const defaultCart: Cart = {
    cartItems: [],
    addCartItem: (product: Product) => {},
    removeCartItem: (id: string) => {}
}

const CartContext = createContext<Cart>(defaultCart)
export default CartContext