import React,{useState} from 'react'

function Item(props) {
    const index = props.item.id;
    return (
        <div className='shopItem'>
            <img src={props.item.img} alt={props.item.name}/>
            <p>{props.item.name}</p> 
            <p>{props.item.description}</p>
            <p>${props.item.price}</p>
            <button onClick={()=>props.addItem(index)}  >Add</button>
            
        </div>
    )
}

export default Item
