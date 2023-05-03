import React, { useEffect, useState } from 'react'
//import data from '../data';
import {Link} from 'react-router-dom'
import "../index.css"
import axios from 'axios'

function HomeScreen(props) {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async () =>{
          const result = await axios.get('api/products');
          setProducts(result.data);
        }
        fetchData();
    },[]);


    return <ul className="products">
      {
        products.map(product =>
          <li>
            <div className="product">
              <Link to={'/product/' + product._id}>
                <img className="product-image" src={product.image} alt="product" />
              </Link>
              {/*Link je da se ne refresha */}
              <div className="product-name">
                <Link to={'/product/' + product._id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">{product.rating} Stars ({product.numReiews} Reviews)</div>
            </div>
          </li>)
      }
    </ul>
  }
  export default HomeScreen;
