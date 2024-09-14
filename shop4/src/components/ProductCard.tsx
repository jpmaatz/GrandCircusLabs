import { Product } from '../interfaces/Product'
import './ProductCard.css'

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img 
        src={product.photoURL || '/images/coming-soon.jpg'} 
        alt={product.name} 
        className="product-image" 
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  )
}

export default ProductCard