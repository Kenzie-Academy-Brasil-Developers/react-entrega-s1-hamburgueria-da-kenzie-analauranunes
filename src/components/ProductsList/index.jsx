import "./style.css";
import { Product } from "../Product";

export const ProductsList = ({ products, handleClick }) => {
  return (
    <ul className="products-ul">
      {products.map((el) => {
        return <Product product={el} key={el.id} handleClick={handleClick} />;
      })}
    </ul>
  );
};
