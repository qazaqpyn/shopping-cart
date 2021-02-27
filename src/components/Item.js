import React,{useState} from 'react'
import items from './tea'

function Item(props) {
    const index = props.item.id;
    return (
        <div className='shopItem'>
            <img src={require(`${props.item.img}`)} alt={props.item.name}/>
            <h3>{props.item.name} | ${props.item.price}</h3> 
            <div className="description-hover">
                <p>{props.item.description}</p>
                <button onClick={()=>props.addItem(index)}  >Add</button>
            </div> 
        </div>
    )
}

export default Item
