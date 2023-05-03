import React, { useEffect, useReducer, useState } from 'react'
//import data from '../data';
import {Link} from 'react-router-dom'
import "../index.css"
import axios from 'axios'
import logger from 'use-reducer-logger'
const reducer = (state, action) =>{
    switch(action.type){
      case 'FETCH_REQUEST':
        return {...state, loading:true};
      case 'FETCH_SUCCESS':
        return {...state, products:action.payload,loading:false}
      case 'FETCH_FAIL':
        return {...state, loading:false,error:action.payload};
      default:
        return state;
    }
}

function HomeScreen(props) {
    const [{loading,error,products},dispatch] = useReducer(logger(reducer),{
      products:[],
      loading:true,
      error:'',})
    //const [products,setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async () =>{
          dispatch({type:'FETCH_REQUEST'})
          try{
            const result = await axios.get('api/products');
            dispatch({type:'FETCH_SUCCESS',payload:result.data})
          }catch(err){
            dispatch({type:'FETCH_FAIL',payload:err.message})
          }
          //setProducts(result.data);
        }
        fetchData();
    },[]);

    // ima laksih nacina za fetch na node server istrazim kasnije


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
