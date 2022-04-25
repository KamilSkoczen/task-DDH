const Basket = ({cartItems, onAdd, onRemove, onRemoveTotal}) => {
const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  return (
    <div className="basket">
        <h2>Podsumowanie:</h2>
        <aside className="block">
      <div>
        {cartItems.length === 0 && <div>Koszyk jest pusty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="single-item-wrap">
            <div className="single-item">
              <div className="col-left">{item.title}</div>
              <div className="col-right">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
                <button onClick= {() => onRemoveTotal(item)}>
                  usuń
                </button>
              </div>
            </div>
            <div className="text-bottom">
              {item.qty} x {item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
              <p>Podsumowanie {itemsPrice} PLN</p>
              <button className="btn checkout"onClick={() => alert('Implement Checkout!')}>
                Przejdź do zamówienia
              </button>
          </>
        )}
      </div>
    </aside>

    </div>
  )
}

export default Basket