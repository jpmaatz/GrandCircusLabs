import { CartItem } from "./CartItem";
import { Product } from "./Product";

export default interface Cart {
    cartItems: CartItem[]
    addCartItem: (product: Product) => void
    removeCartItem: (id: string) => void
}