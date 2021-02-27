import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import items from './tea';
import CartItem from './CartItem';

function Checkout(props) {
    let history = useHistory();
    useEffect(() => {
        if(props.cardItems.length ===0){
            setTimeout(()=>{history.push('/shopping-cart/shop');},1000)
        }
    })
    return (
        <div>
            {props.cardItems.length > 0
            ?   
                <div>
                    <div className="cartItems">
                        {props.cardItems.map((item,index)=>{
                            return(
                                <CartItem item={items[item.id]} index={index} removeItem={props.removeItem}/>
                            )
                        })}
                        <div className="total">
                            <p>Total: </p>
                            <p>${props.cardItems.reduce((total,item)=>{
                                return total+parseInt(items[item.id].price);
                            },0)}</p>
                        </div>
                    </div>
                    <div className="cartFinish">
                        <button onClick={props.clearCart}>Clear Cart</button>
                        <button>Checkout</button> 
                    </div>
                </div>
            :
                <div className="emptyCart">
                    <p>Cart is empty</p>
                    <p>Redirecting to Shop...</p>
                </div>
            }
        </div>
    )
}

export default Checkout
