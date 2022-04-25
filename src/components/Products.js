import Product from "./Product"

const Products = ({products,onAdd}) => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd}/>
      ))}
    </>
  )
}

export default Products