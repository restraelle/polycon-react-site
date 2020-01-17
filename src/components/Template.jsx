import React from 'react';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem';
import Footer from './Footer';

export default class Template extends React.Component {
    render() {
        return (
            <div className="layout">
                <Navigation>
                    <NavigationItem title="Home" link="/"/>
                    <NavigationItem title="Tickets" link="/tickets"/>

                    <NavigationItem title="Information" link="/information">
                        <NavigationItem title="F.A.Q." link="/information/faq" level={1}/>
                        <NavigationItem title="Policies" link="/information/policies" level={1}/>
                        <NavigationItem title="Maps" link="/information/maps" level={1}/>
                    </NavigationItem>

                    {/* <NavigationItem title="Events" link="/events">
                        <NavigationItem title="Panel & Events" link="/events/panels" level={1}/>
                        <NavigationItem title="Special Guests" link="/events/special-guests" level={1}/>
                        <NavigationItem title="Merchant's Guild" link="/events/merchants" level={1}/>
                        <NavigationItem title="Food Trucks" link="/events/food-trucks" level={1}/>
                        <NavigationItem title="After Party" link="/events/after-party" level={1}/>
                    </NavigationItem> */}

                    <NavigationItem title="Applications" link="/applications"/>
                    <NavigationItem title="Contact" link="/contact"/>
                </Navigation>

                {this.props.children}

                <Footer/>
            </div>
        );
    }
}