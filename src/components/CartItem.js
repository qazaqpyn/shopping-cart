import React,{useState} from 'react'

function CartItem(props) {

    return (
        <div className="cartItem">
            <div className="cartInfo">
                <p>{props.item.name}</p>
                <div>
                    <p id="cartPrice">${props.item.price}</p>
                    <button onClick={()=>props.removeItem(props.index)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
