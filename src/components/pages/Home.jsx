import React from 'react';
import {Link} from 'react-router-dom';

import Template from '../Template';

import ImageCallout1 from '../../static/img/callout-1.jpg';
import ImageCallout2 from '../../static/img/callout-2.jpg';
import ImageCallout3 from '../../static/img/callout-3.jpg';
import ImageCallout4 from '../../static/img/callout-4.jpg';

import NavigationItem from '../NavigationItem';
import PostThumbnail from '../PostThumbnail';
import HeroSlider from '../HeroSlider';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="notice">
                    <div class="notice-content">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h1>Important Message</h1>
                        <p>First, we'd like to take a moment to thank everyone who has purchased or received a ticket to attend this years FLPolyCon event. It means a lot to see so many members of our community coming together to host a truly amazing event.</p>

                        <p>However, following a mandated order of remote operations for the public state universities citing health concerns, we have decided that it is in our best interest to cancel FLPolyCon 2020, effective immediately.  We are worried about having such a large gathering of people in an enclosed public space, with the ongoing spread of COVID-19.</p>

                        <p>Following this email, all tickets will be refunded. If you have any questions, please don't hesitate to email us at <a href="mailto:administration@flpolycon.org">administration@flpolycon.org</a>. Stay safe and remember to wash your hands!</p>

                        <p>Sincerely,</p>
                        <p>The FLPolyCon 2020 Staff Team</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}