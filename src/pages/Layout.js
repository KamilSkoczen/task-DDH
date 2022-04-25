import Basket from "../components/Basket"
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { RiShoppingBasketFill } from 'react-icons/ri'

const Layout = ({cartItems, onAdd, onRemove, onRemoveTotal}) => {
  
  const [basketState, setBasketState] = useState(false)
  return (
    <div className= {`page-wrap ${basketState ? 'blur' : ''}`}>
        <div className="layout-page">
          <div className="container koszyk-wrap">
            <div className="toggle-koszyk">
              <button className="btn" onClick={() => setBasketState(!basketState)}>Koszyk <RiShoppingBasketFill/> </button>
            </div>
            <div className="koszyk" style={{display:basketState ? 'block' : 'none'}}>
                <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onRemoveTotal={onRemoveTotal}/>
            </div>
          </div>
          <Outlet basketState={basketState}/>
      </div>
    </div>
  )
}

export default Layout