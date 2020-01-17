import React from 'react';
import {Link} from 'react-router-dom';

import Page from '../Page';

export default class Information extends React.Component {
    render() {
        return (
            <Page title="Information">
                <p>FLPolyCon is a diverse, all-inclusive geek culture celebration hosted by the students and alumni of Florida Polytechnic University. Here is some general information links for all of your information-seeking needs!</p>
                <div style={{margin: "0 auto", position: "relative"}}>
                    <Link to="/information/faq" class="info-list-item">
                        Frequently Asked Questions
                    </Link>
                    <Link to="/information/policies" class="info-list-item">
                        Policies
                    </Link>
                    <Link to="/information/maps" class="info-list-item">
                        Maps
                    </Link>
                </div>
                
            </Page>
        );
    }
}