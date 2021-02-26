import React,{useState} from 'react';
import items from './tea';
import CartItem from './CartItem';

function Checkout(props) {
    return (
        <div>
            {props.cardItems.length > 0
            ?
                <div>
                    {props.cardItems.map((item,index)=>{
                        return(
                            <CartItem item={items[item.id]} index={index} removeItem={props.removeItem}/>
                        )
                    })}
                    <p>Total: ${props.cardItems.reduce((total,item)=>{
                        return total+parseInt(items[item.id].price);
                    },0)}</p>
                    <button onClick={props.clearCart}>Clear Cart</button>
                    <button>Checkout</button> 
                </div>
            :
                <div>
                    <p>Cart is empty</p>
                </div>
            }
        </div>
    )
}

export default Checkout
