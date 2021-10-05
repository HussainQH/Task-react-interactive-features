import products from "../products";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div className="productWrapper" onClick={() => props.setInfo(product)}>
      <img alt={product.name} src={product.image} />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <button
        className="danger"
        onClick={() =>
          props.setRemove(products.splice(products.indexOf(props.product), 1))
        }
      >
        Remove Item
      </button>
    </div>
  );
};

export default ProductItem;
