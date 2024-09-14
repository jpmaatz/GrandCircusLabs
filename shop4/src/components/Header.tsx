
import './Header.css'

const Header: React.FC = () => {
    return (
      <header className="header">
        <h1>Product App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
    )
  }
  
  export default Header