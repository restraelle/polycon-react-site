import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './static/css/normalize.css';
import './static/css/skeleton.css';
import './static/css/configurator.scss';
import './static/css/fontawesome.css';

import ScrollToTop from './components/ScrollToTop';
import {RemountingRoute} from './components/RemountingRoute';

import Template from './components/Template';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import AfterParty from './components/pages/AfterParty';
import Events from './components/pages/Events';
import FoodTrucks from './components/pages/FoodTrucks';
import FrequentlyAskedQuestions from './components/pages/FrequentlyAskedQuestions';
import Information from './components/pages/Information';
import Maps from './components/pages/Maps';
import Merchants from './components/pages/Merchants';
import Panels from './components/pages/Panels';
import Policies from './components/pages/Policies';
import SpecialGuests from './components/pages/SpecialGuests';
import Tickets from './components/pages/Tickets';
import Applications from './components/pages/Applications';

import GenericNotFound from './components/pages/NoMatch';

export default function TOC() {
    return (
        <React.Fragment>
            <ScrollToTop>
                <Template>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/contact" exact component={Contact}/>
                        <Route path="/tickets" exact component={Tickets}/>
                        <Route path="/information" exact component={Information}/>
                        <Route path="/applications" exact component={Applications}/>
                        <Route path="/information/faq" exact component={FrequentlyAskedQuestions}/>
                        <Route path="/information/policies" exact component={Policies}/>
                        <Route path="/information/maps" exact component={Maps}/>
                        <Route path="/events" exact component={Events}/>
                        <Route path="/events/panels" exact component={Panels}/>
                        <Route path="/events/special-guests" exact component={SpecialGuests}/>
                        <Route path="/events/merchants" exact component={Merchants}/>
                        <Route path="/events/food-trucks" exact component={FoodTrucks}/>
                        <Route path="/events/after-party" exact component={AfterParty}/>
                        <Route component={GenericNotFound}/>
                    </Switch>
                </Template>
            </ScrollToTop>
        </React.Fragment>
    );
}