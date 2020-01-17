import React from 'react';

import Template from '../Template';
import Page from '../Page';

import ImageBuildings from '../../static/img/buildings-2.jpg';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <Page title="Contact" image={ImageBuildings}>
                <div className="desktop-whole mobile-whole left">
                    <div class="contact-info desktop-two-thirds mobile-whole left" style={{top: "13px", position: "relative"}}>
                        {/* <div class="contact-detail">
                            <div class="contact-icon"><i class="fas fa-phone"></i></div>
                            <p class="no-margin"><b>Phone</b></p>
                            <p class="no-margin">USA: 123.123.1234</p>
                            <p class="no-margin">MEX: 321.321.3210</p>
                        </div> */}
                        <div class="cf"></div>

                        <div class="contact-detail">
                            <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                            <p class="no-margin"><b>E-mail</b></p>
                            <p class="no-margin">administration@flpolycon.org</p>
                        </div>
                        <div class="cf"></div>
                        {/* 
                        <div class="contact-detail">
                            <div class="contact-icon"><i class="fas fa-map-marked-alt"></i></div>
                            <p class="no-margin"><b>Offices</b></p>
                            <p class="no-margin">1069 Saint Clair Street</p>
                            <p class="no-margin">Clarksdale, MS 38614</p>
                        </div>
                        <div class="cf"></div> */}
                    </div>
                    <div class="contact-form-box desktop-third mobile-whole right">
                        <form id="contact-form" action="https://formsubmit.io/send/03450dcd-8be1-4069-8e10-ee91939ccccc" method="POST" class="contact-form">
                            <h5>Send us a message</h5>
                            <label for="name">Name</label>
                            <input id="name" name="name" type="text"/>

                            <label for="email">E-mail address</label>
                            <input id="email" name="email" type="email"/>

                            <label for="phone_number">Phone Number</label>
                            <input id="phone_number" type="text"/>

                            <label for="message">Message</label>
                            <textarea id="comment" name="comment" type="text"></textarea>

                            <input name="_formsubmit_id" type="text" style={{display: "none"}}></input>

                            <input value="Submit" type="submit" class="button"/>
                        </form>
                    </div>
                </div>
                
                <div className="clearfix"></div>
            </Page>
        );
    }
}