import { Link } from 'react-router-dom'
// import { useTheme,useThemeUpdate } from "./ThemeContext"
const Product = ({product, onAdd}) => {
  return (
    <div className="products">
      <div></div>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{`${product.price} PLN`}</p>
        <div className='product-buttons'>
          <button className="btn"onClick={() => onAdd(product)}>Do koszyka</button>
          <Link to={`/product-page/${product.id}`}>Zobacz więcej</Link>
        </div>
      </div>
        
        
    </div>
  )
}

export default Product