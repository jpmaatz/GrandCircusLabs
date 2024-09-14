import { useContext } from "react"
import OrderContext from "../contexts/OrderContext"

const Cart = () => {
	const { cart } = useContext(OrderContext)

	return (
		<div className="updatedcart">
			<h3>Cart</h3>
			{cart.map(it => (
				<div key={it.id}>{it.name}</div>
			))}
		</div>
	)
}
export default Cart