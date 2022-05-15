import './items.css'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaRupeeSign } from 'react-icons/fa'
import { increment, decrement, removeTocart, calculatetotal } from '../slices/cartSlice'

const Items = () => {

  const {value,total,item}= useSelector((state)=>state.cart);

  const dispatch= useDispatch();
    const removetocart =(id)=>{
      dispatch(removeTocart(id))
    }
   
    const Increment =(id)=>{
   
      dispatch(increment(id))
    }
   
    const Decrement =(id)=>{
      if (item<1){
        dispatch(removetocart(id))
      }
       else{
        dispatch(decrement(id))
       }
    }
    useEffect(()=>{
       dispatch(calculatetotal())
   },[value])
  
    
  return (
    <div>
      {
                      value.map((ele)=>{
                           const {id,titile,img, price,  quantity, description} = ele
                            return <>
                            <div className="cart-items-info">
                            <div className="product-img">
                                <img src={img} alt="product-img" style={{width:'200px'}}/>
                            </div>
                            <div className='title'>
                                 {/* <h3>{id}</h3> */}
                                <h2>{titile} </h2>
                                <p>{description}</p>
                            </div>
                            <div className='add-remove-items'>
                            <button type="button" class="btn btn-outline-info" onClick={()=> Increment(id)}>Add</button>
                                                        <span>{quantity}</span>

                            <button type="button" class="btn btn-outline-warning" onClick={()=> Decrement(id) } >Rem</button>                   </div>
                            <div className="items-price"><h3>{price}<FaRupeeSign /></h3>

                            </div>
                            <div className="remove-item">
                            <button type="button" class="btn btn-outline-danger" onClick={()=>removetocart(id)}>remove</button>
                            </div>

                          

                        </div>
                           </>
                       })
                   }
                   <hr /><h1>Grand Total={total}</h1> 
                   <hr />
      

    </div>
  )
}

export default Items