import React from 'react';
import ReactDOM from 'react-dom';
//REDUX IMPORTS
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from "redux-promise";

//ROUTER IMPORTS
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import './index.css';
import reducers from './reducers';
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show'


const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);



ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter>
            <div className="container">
              <Switch>
                <Route path="/posts/new" component={PostsNew}/>
                <Route path="/posts/:id" component={PostsShow}/>
                <Route path="/" component={PostsIndex}/>
              </Switch>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
