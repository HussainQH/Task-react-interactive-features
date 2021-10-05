import React from "react";

function Detail(props) {
  const product = props.info;
  return (
    <div className="detail">
      <img alt={product.name} src={product.image} />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <p>{product.info}</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Detail;
