import React,{useState} from 'react'
import items from './tea'

function Item(props) {
    const index = props.item.id;
    return (
        <div className='shopItem'>
            {/* {{require(`${props.item.img}`)}} */}
            <img src='' alt={props.item.name}/>
            <h3>{props.item.name} | ${props.item.price}</h3> 
            <div className="description-hover">
                <p>{props.item.description}</p>
                <button onClick={()=>props.addItem(index)}  className="cartAdd">Add</button>
            </div> 
        </div>
    )
}

export default Item
