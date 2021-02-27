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
                <header>
                    <a href='/shopping-cart/'>LOGO</a>
                    <nav>
                        <div>
                            <ul>
                                <li><NavLink to='/shopping-cart/about'>About</NavLink></li>
                                <li><NavLink to='/shopping-cart/shop'>Shop</NavLink></li>
                                <li><NavLink to='/shopping-cart/cart'>Cart({cardItems.length})</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <Switch>
                    <Route exact path='/shopping-cart/about' component={About} />
                    <Route exact path='/shopping-cart/shop' 
                        render={()=>(
                            <Shop addItem={addItem} />
                        )} />
                    <Route exact path='/shopping-cart/cart' 
                    render={()=>(
                        <Checkout cardItems={cardItems} clearCart={clearCart} removeItem={removeItem}/>
                    )} />
                    <Route exact path="/shopping-cart/" component={Welcome} />
                </Switch>
           </BrowserRouter> 
        </div>
    )
}

export default Routes
