import React from 'react';

const Product = ({productData}) => {
  return (
    <div>
      <img src={productData.image} />

      <h3>{productData.title}</h3>
      <p>{productData.price}</p>
      <div>
        <a >Deatils</a>
        <div>
            <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
