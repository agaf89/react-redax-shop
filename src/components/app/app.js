import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import { Route, Switch } from 'react-router-dom'


const App = () => {
    return (
        <div style={{background: `linear-gradient(90deg, #b9deed, #efefef)`}} className="app">
            <AppHeader/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/total'  component={CartPage}/>
                <Route exact component={MainPage}/>
            </Switch>
            
        </div>
    )
}

export default App;