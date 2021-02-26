import React from 'react';
import items from './tea';
import Item from './Item';

function Shop(props) {
    
    return (
        <div className='shopItems'>
            {items.map((item)=>{
                return (
                    <Item item={item} addItem={props.addItem}/>
                )
            })}
        </div>
    )
}

export default Shop
