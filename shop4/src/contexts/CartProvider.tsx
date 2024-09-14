import { Product } from "../interfaces/Product";
import CartContext from "./CartContext";
import { CartItem } from "../interfaces/CartItem";
import { useState, FC, ReactNode } from "react"

interface Props {
    children: ReactNode
}

const CartProvider: FC<Props> = ({ children }) => {
    const [cartItems, setCartItem] = useState<CartItem[]>([])
    const addCartItem = (product: Product) => {
        // add cart item w/ quantity 1 from product if it doesn't exist
        // if it does exist, update cart item to have 1 more quantity
    }
    // remove cart item ticks the quantity down if it exists
    // if there is just one, then remove the cart item from the array
}
