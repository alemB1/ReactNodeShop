import React from 'react'
import Rating from './Rating';

export default function Product(props) {
    const {product} = props; // so i dont have to write props.product._id etc
  return (
    <div key={product._id} className="card">
    <a href={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt="prod"/>
    </a>
    <div className="card-body">
        <a href={`/product/${product._id}`}>
        <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews = {product.numReviews}></Rating>
        <div className="price">
            {product.price}$
        </div>
      </div>
    </div>
  )
}
