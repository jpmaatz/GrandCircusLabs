import { FC } from "react"
import Product from "./Product"
import { useState, useEffect } from "react"
import { fetchProducts } from "../services/productService"

const Shop: FC = () => {
	const [searchParams] = useSearchParams()

	useEffect(() => {
		fetchProducts().then({})
	}, [])
	return (
		<>
			<h1>Shop</h1>
			{products.map(product => (
				<div>
					<Link>
					</Link>
				</div>
			))}
		</>
	)
}
export default Shop