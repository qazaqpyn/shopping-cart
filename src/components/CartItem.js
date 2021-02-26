import React,{useState} from 'react'

function CartItem(props) {
    const [count, setCount] = useState(1);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = ()=>{
        if(count>0){
            setCount(count-1);
        }
    }
    return (
        <div>
            <img src={props.item.img} alt={props.item.name}/>
            <p>{props.item.name}</p> 
            <p>${props.item.price}</p>
            {/* <div>
                <p>number: {count}</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div> */}
            <button onClick={()=>props.removeItem(props.index)}>Remove</button>
        </div>
    )
}

export default CartItem
