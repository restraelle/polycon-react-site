import React from 'react';
import {Link} from 'react-router-dom';

import Page from '../Page';

import ImageIST from '../../static/img/hero-6.jpg';

export default class Tickets extends React.Component {
    render() {
        return (
            <Page title="Tickets" image={ImageIST}>
                <p>Fill in this page here.</p>
            </Page>
        );
    }
}