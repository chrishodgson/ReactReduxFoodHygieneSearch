import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, Switch} from 'react-router-dom';
import thunk from 'redux-thunk';
import history from './history';
import reducers from './reducers';

import RegionsList from './containers/regions_list';
import LocalAuthoritiesList from './containers/local_authorities_list';
import LocalAuthorityRatingsList from './containers/local_authority_ratings_list';
import Establishments from './containers/establishments';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

//const store = createStore(reducers, applyMiddleware(...middleware)); //without dev tools

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middleware),
));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={RegionsList}/>
                <Route path="/region/:id" component={LocalAuthoritiesList}/>
                <Route path="/localAuthorityRating/:id" component={LocalAuthorityRatingsList}/>
                <Route path="/localAuthority/:id" component={Establishments}/>
            </Switch>
        </Router>
    </Provider>
    , document.querySelector('.container'));

