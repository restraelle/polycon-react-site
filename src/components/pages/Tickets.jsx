import React from 'react';
import {Link} from 'react-router-dom';

import Page from '../Page';

import ImageIST from '../../static/img/hero-6.jpg';

export default class Tickets extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.EBWidgets.createWidget({
            widgetType: 'checkout',
            eventId: '84364020055',
            modal: true,
            modalTriggerElementId: 'eventbrite-widget-modal-trigger-84364020055',
            onOrderComplete: console.log("nice")
        });
    }

    openCheckout() {
        
    }
    render() {
        return (
            <Page title="Tickets" image={ImageIST}>
                <div className="info">
                    <div className="info-item">
                        <p>Click the button to select your tickets for FLPolyCon 2020!</p>
                        <br/>
                        <button id="eventbrite-widget-modal-trigger-84364020055" type="button" className="buy-button">Purchase Tickets</button>
                    </div>
                    <div className="info-item">
                        <h4>For Florida Polytechnic Students</h4>
                        How to claim your ticket to FLPolyCon:
                        <ol>
                            <li>Click on "Purchase Tickets"</li>
                            <li>On the EventBrite window, click "Apply Promo Code"</li>
                            <li>Enter the last 4 digits of your Student ID</li>
                            <li>Click "Apply"</li>
                        </ol>
                    </div>
                    <div className="info-item">
                        
                        <h4>Location</h4>
                        <ul>
                            <p>FLPolyCon is located on the main campus of Florida Polytechnic University at the address:</p>
                            <br/>
                            <p style={{margin: "20px 0px", display: "inline-block"}}>
                                <b>
                                    Florida Polytechnic University
                                    <br/>
                                    4700 Research Way
                                    <br/>
                                    Lakeland, FL, 33805
                                </b>
                            </p>
                            <br/>
                            <p>On the day of the event, please follow the event signs that will direct you to the correct location.</p>
                        </ul>
                    </div>

                    <div className="info-item">
                        <h4>Parking</h4>
                        <p>Unfortunately, we cannot offer included parking this year due to changes within the University. Temporary parking passes are $5 and can be acquired at <a href="https://bit.ly/2sIjAcE">this link.</a></p>
                    </div>

                    <div className="info-item">
                        <h4>Pricing & Info</h4>
                        <ul>
                            <li><p>Pre-registered Tickets (Early Bird): $5</p></li>
                            <li><p>Pre-registered Tickets: $15</p></li>
                            <li><p>At Door Tickets: $20</p></li>
                            <li><p>Children 12 & Under: Free</p></li>
                            <li><p>Elderly 60 & Over: Free</p></li>
                            <li><p><b>FLPolyCon is free to all Florida Polytechnic University Students.</b></p></li>
                            <li><p style={{color: "red"}}><b><u>We will not be accepting cash for payment for a ticket at the door. We will only be accepting credit card and pre-registrations.</u></b></p></li>
                        </ul>
                    </div>
                    
                    <div className="info-item">
                        <h4>Need more info?</h4>
                        <p>For more information, check out our information pages below!</p>
                        <br/>
                        <Link className="info-list-item" to="/information/policies">Policies</Link>
                        <Link className="info-list-item" to="/information/faq">Frequently Asked Questions</Link>
                    </div>
                </div>
            </Page>
        );
    }
}