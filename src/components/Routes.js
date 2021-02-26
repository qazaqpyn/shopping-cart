import React, {useState} from 'react'
import {BrowserRouter, Switch, Route, NavLink, Link} from 'react-router-dom';
import Shop from './Shop';
import Checkout from './Checkout';
import About from './About';
import Welcome from './Welcome';

function Routes() {
    const [cardItems, setCardItems] = useState([]);
    const addItem = (id,number=1) => {
        let list = Object.assign([],cardItems);
        list.push({
            id : id,
            number : number
        });
        setCardItems(list);
    }

    const clearCart = () => {
        setCardItems([])
    }

    const removeItem = (index) => {
        let list = Object.assign([],cardItems);
        list.splice(index,1);
        setCardItems(list);
    }

    return (
        <div>
           <BrowserRouter>
                <nav>
                    <div>
                        <a href='/'>LOGO</a>
                        <ul>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li><Link to='/cart'>Cart({cardItems.length})</Link></li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/shop' 
                        render={()=>(
                            <Shop addItem={addItem} />
                        )} />
                    <Route exact path='/cart' 
                    render={()=>(
                        <Checkout cardItems={cardItems} clearCart={clearCart} removeItem={removeItem}/>
                    )} />
                    <Route exact path="/" component={Welcome} />
                </Switch>
           </BrowserRouter> 
        </div>
    )
}

export default Routes
