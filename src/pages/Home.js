import ContainerHeaader from "../components/ContainerHeaader"
import Products from "../components/Products"

const Home = ({products, onAdd}) => {
  return (
        <>  
          <div className="container">
            <ContainerHeaader text="Lista pakietów" color="#05867e"/>
            <Products products = {products} onAdd={onAdd}/>
          </div>
        </>
  )
}

export default Home