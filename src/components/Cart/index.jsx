import { CartProduct } from "../CartProduct";
import { CartTotal } from "../CartTotal";
import "./style.css";

export const Cart = ({ cartProduct, removeProduct, removeAll }) => {
  return (
    <div className="cartInfo-div">
      <div className="h2-div">
        <h2 className="cart-h2">Carrinho de compras </h2>
      </div>
      {cartProduct.length === 0 ? (
        <div className="empty-div">
          <h3 className="message-h3">Sua sacola está vazia</h3>
          <p className="add-p">Adicione itens</p>
        </div>
      ) : (
        <div className="ulCart-div">
          <ul className="cart-ul">
            {cartProduct.map((el) => {
              return (
                <CartProduct
                  cartProduct={el}
                  key={el.id}
                  removeProduct={removeProduct}
                />
              );
            })}
          </ul>
          <CartTotal product={cartProduct} removeAll={removeAll} />
        </div>
      )}
    </div>
  );
};
