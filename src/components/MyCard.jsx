import {Button, Card} from 'react-bootstrap';
import { useDispatchCart, useCart } from './ContextReducer';
import { useEffect, useState, useRef } from 'react';
function MyCard(props){
    let dispatch= useDispatchCart();
    let data= useCart();
    const priceRef= useRef();
    let options= props.options;
    let priceOptions= Object.keys(options);
    const [quantity, setQuantity]= useState(1);
    const [size, setSize]= useState('');
    let styles={
        width:'100%',
        height:'200px',
        objectFit:'cover'
    }
    let foodItem= props.foodItems;
    const handleAddToCart= async ()=>{
        let food=[];
        for(const item of data){
            if(item.id === foodItem._id){
                food= item;
                break;
            }
        }
        if(food!=[]){
            if(food.size=== size){
                await dispatch({type:'UPDATE', id:foodItem._id, price:finalPrice, quantity: quantity});
                return;
            }
        }
        await dispatch({type: 'ADD', id:foodItem._id, name:foodItem.name, price: finalPrice, quantity: quantity, size: size});
    }
    let finalPrice= quantity * parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value);
    }, []);
    return(
        <div>
            <div className='mt-3 '>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={foodItem.img}  style={styles}/>
      <Card.Body>
        <Card.Title>{foodItem.name}</Card.Title>
        <Card.Text>
          {foodItem.description}
        </Card.Text>
        <div className='container w-100'>
            <select  className='m-2 h-100 bg-info text-white rounded' onChange={(event)=>{
                setQuantity(event.target.value);
            }}>
            {Array.from(Array(6), (e,i)=>{
                return(
                    <option key={i+1} value={i+1}> {i+1} </option>
                )
            })}
            </select>

            <select className='m-2 h-100 bg-info text-white rounded' ref={priceRef}  onChange={(event)=>{
                setSize(event.target.value);
            }}>
                {priceOptions.map((data)=>{
                    return <option value={data} key={data}>{data}</option>
                })}
            </select>
            <div className='d-inline h-100 fs-5'>
                {finalPrice}/-
            </div>
            <hr />
            <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}> Add to Cart</button>
        </div>
      </Card.Body>
    </Card>
            </div>
        </div>
    )
}
export default MyCard;