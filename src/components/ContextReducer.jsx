import React, { createContext, useContext, useReducer } from 'react'
const CartStateContext= createContext();
const CardDispatchContext= createContext();
const reducer= (state, action)=>{
    switch(action.type){
        case "ADD":
            return [...state, {id: action.id, name:action.name, quantity: action.quantity, size: action.size, price: action.price, img: action.img}]

        case "REMOVE":
            let newArr= [...state];
            newArr.splice(action.index, 1);
            return newArr;
        case "UPDATE":
            let arr=[... state];
            arr.find((food, index)=>{
                if(food.id== action.id){
                    arr[index]= {... food, quantity: parseInt(action.quantity) + food.quantity, price: action.price+ food.price}
                }
            })
            return arr;
        case 'DROP':
            let newarr=[];
            return newarr;
        default:
            console.log('Error in reducer');
            return state;
    }
}
export const CartProvider= ({children})=>{
    const[state, dispatch]= useReducer(reducer,[]);
    return(
        <CardDispatchContext.Provider value= {dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CardDispatchContext.Provider>
    )
}
export const useCart=()=>{
  return  useContext(CartStateContext);
}
export const useDispatchCart=()=>{
  return  useContext(CardDispatchContext);
}
