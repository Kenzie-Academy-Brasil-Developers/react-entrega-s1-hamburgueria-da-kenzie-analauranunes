import "./style.css";

export const CartProduct = ({ cartProduct, removeProduct }) => {
  return (
    <li className="cart-li">
      <div className="divisionCart-div">
        <div className="imgCart-div">
          <img
            className="cart-img"
            src={cartProduct.img}
            alt={cartProduct.name}
          />
        </div>
        <div className="namCateg-div">
          {window.screen.width < 430 ? (
            <>
              {cartProduct.name.length > 11 ? (
                <>
                  <h3 className="cart-h3">
                    {cartProduct.name.substr(0, 11)}...
                  </h3>
                </>
              ) : (
                <>
                  <h3 className="cart-h3">{cartProduct.name}</h3>
                </>
              )}
            </>
          ) : (
            <>
              <h3 className="cart-h3">{cartProduct.name}</h3>
            </>
          )}
          <p className="cart-category">{cartProduct.category}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => removeProduct(cartProduct.id)}
          className="remove-button"
          id={cartProduct.id}
        >
          Remover
        </button>
      </div>
    </li>
  );
};
