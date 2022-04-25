import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
const ProductPage = ({onAdd}) => {

    const [product, setProduct] = useState([])
    const productURL = useLocation();
    const productURLPath = productURL.pathname
    const productId = productURLPath.substring(productURLPath.lastIndexOf('/') + 1)

    useEffect(() => {

        //Fetch Product
        const fetchProduct = async (id) => {
            const res = await fetch(`http://localhost:5000/products/${id}`)
            const data = await res.json()
            return data
        }

        const getProduct = async () => {
            const ProductsFromServer = await fetchProduct(productId)
            setProduct(ProductsFromServer)
        }

        getProduct()

    }, [])
    

    return (
        <div className="container product-page">
            <div className='col-left'>
                <img className="product-image" src={product.image} alt="product-name"/>
            </div>
            <div className='col-right'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{`${product.price} PLN`}</p>
                <div className='product-buttons'>
                    <button className='btn' onClick={() => onAdd(product)}>Do koszyka</button>
                    <Link to="/">Wróć do listy</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductPage