import "./style.css";

export const Product = ({ product, handleClick }) => {
  return (
    <li className="products-li">
      <div className="pic-div">
        <img className="pic-img" src={product.img} alt={product.name} />
      </div>
      <div className="info-div">
        <h3 className="name-h3">{product.name}</h3>
        <p className="category-p">{product.category}</p>
        <p className="price-p">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
        <button
          onClick={() => handleClick(product.id)}
          className="add-button"
          id={product.id}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};
