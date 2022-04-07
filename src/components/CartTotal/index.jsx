import "./style.css";

export const CartTotal = ({ product, removeAll }) => {
  const total = product.reduce(
    (lastValue, currValue) => lastValue + currValue.price,
    0
  );

  return (
    <div className="total-div">
      <div className="values-div">
        <p className="value-p">Total</p>
        <span className="value-span">
          R$ {total.toFixed(2).replace(".", ",")}
        </span>
      </div>
      <button className="removeAll-button" onClick={() => removeAll()}>
        Remover todos
      </button>
    </div>
  );
};
