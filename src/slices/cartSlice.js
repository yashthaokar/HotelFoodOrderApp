import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value:[],
    total:1,
    item:1
}

 export const cartSlice = createSlice({
     name:'food',
     initialState,
     reducers:{
         addTocart:(state, action)=>{
             state.value.push(action.payload)
              console.log(state.value)
         },
         removeTocart:(state, action)=>{
            const newList = state.value.filter((ele,i)=>ele.id!==action.payload)
            state.value = newList;
            
            
        },
        increment:(state, action)=>{
            const cartItem = state.value.find((ele)=>ele.id==action.payload)
         
            cartItem.quantity= cartItem.quantity+1
        },
       decrement:(state, action)=>{
        const cartItem = state.value.find((ele)=>ele.id==action.payload)
        cartItem.quantity= cartItem.quantity-1
        },
        calculatetotal:(state)=>{
            let item = 0;
            let amount=0;
            state.value.forEach((ele)=>{
                    console.log(ele)
                item+=ele.quantity;
                amount+=ele.quantity*ele.price;
            })

            state.item=item
            state.total=amount

           
            },
            
      


     },
 })
 export const {addTocart, removeTocart, increment, decrement, calculatetotal} = cartSlice.actions
 export default cartSlice.reducer
