import React from 'react'
// import { GiShoppingBag } from 'react-icons/gi'
import { FaRupeeSign } from 'react-icons/fa'
import '../Components/Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { products } from './products'
import { addTocart } from '../slices/cartSlice'


const Cart = () => {
    const dispatch = useDispatch()
    const addtoCart = (ele) => {
        dispatch(addTocart(ele))
    }

    return (
        <>
            <section className=' main-cart-section'>
                <h1> BHAJAN SINGH HOTEL</h1>
                <p>You Have Pick No of food items:-
                    <span className='total-items-span'>0</span>
                </p>

                <div className="cart-items">
                    <div className="cart-items-container">


                        {
                            products.map((ele) => {
                                const { id, titile, img, price, quantity, description } = ele
                                return <>
                                    <div className="cart-items-info">
                                        <div className="product-img">
                                            <img src={img} alt="product-img" style={{ width: '200px' }} />
                                        </div>
                                        <div className='title'>
                                            <h2>{titile} </h2>
                                            <p>{description}</p>
                                        </div>
                                        <div className='add-remove-items'>
                                            <button type="button" class="btn btn-outline-info" onClick={() => addtoCart(ele)}>Add</button>

                                        </div>
                                        <div className="items-price"><h3>{price}<FaRupeeSign /></h3>

                                        </div>


                                    </div>
                                </>
                            })
                        }












                    </div>
                </div>

            </section>
        </>
    )
}

export default Cart;