import React from 'react';
import {Link} from 'react-router-dom';

import Page from '../Page';
import ApplicationBox from '../ApplicationBox';

import ImageCosplayers from '../../static/img/hero-5.jpg';

export default class Applications extends React.Component {
    render() {
        return (
            <Page title="Applications" image={ImageCosplayers}>
                <h3>General</h3>
                <div className="application-section">
                    <ApplicationBox color="#f46853" title="Volunteer Application" description="Free Admission, Food Voucher, and Limited T-Shirt" iconClass="fas fa-hands-helping" link="https://docs.google.com/forms/d/1Ft2CjKrBoGujmztUBVs2d0hQ5nID7uOjJeGuuAFNSAs"/>
                    <ApplicationBox color="#3fba82" title="Merchant Application" description="Merchandise, artist, and food vendors" iconClass="fas fa-store" link="https://docs.google.com/forms/d/14NIUufXNB9zsvncIp1hal4FdoBJ0CFUKsXMWi1TXEtk"/>
                    {/* <ApplicationBox color="#61d2f4" title="Special Guest Application" description="" iconClass="fas fa-users" link="https://docs.google.com/forms/d/1Uagr1fDubYLglD1Y1ik2LTAUhejK3KoX-o2BDmOCJV4"/> */}
                    <ApplicationBox color="#f779c2" title="Cosplay Guest Application" description="" iconClass="fas fa-user" link="https://docs.google.com/forms/d/112VP0dPiqzsuTc18oThCaqGX1qA2g7E7lbXhWC3HnP0/edit?usp=drive_web"/>
                    <div className="clearfix"></div>
                </div>

                <h3>Events</h3>
                <div className="application-section">
                    <ApplicationBox color="#f4a861" title="Event Application" description="Panels & Main Stage" iconClass="fas fa-calendar-alt" link="https://docs.google.com/forms/d/1kDWfME1tQRlJz3lDjX1NufLA-0r7BMW61vpJ3rRo4NA"/>
                    <ApplicationBox color="#ac53f4" title="Idol Festival Application" description="Event Application" iconClass="fas fa-calendar-alt" link="https://docs.google.com/forms/d/1RZJFbTLjPIfrZ1YjOZSIZJwPcTtpH0qlGGdalmbFFO8/edit"/>
                    <ApplicationBox color="#c45269" title="Cosplay Contest Pre-registration" description="New cosplayers welcome!" iconClass="fas fa-user-astronaut" link="https://forms.gle/r9i7PvAd5a3n7xzPA"/>
                </div>

                <h3>Requests</h3>
                <div className="application-section">
                    <ApplicationBox color="#f77983" title="Cosplay Guest Request Form" description="Suggestions welcome!" iconClass="fas fa-vote-yea" link="https://docs.google.com/forms/d/e/1FAIpQLSd7wyn30lVNCohiYeKe_mPaLyT2o9xWR9H7x8U6efEV4wuBzw/viewform?usp=sf_link"/>
                </div>
            </Page>
        );
    }
}