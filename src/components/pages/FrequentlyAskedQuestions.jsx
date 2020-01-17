import React from 'react';
import {Link} from 'react-router-dom';

import Page from '../Page';

import ImageDeLorean from '../../static/img/hero-1.jpg';

export default class FrequentlyAskedQuestions extends React.Component {
    render() {
        return (
            <Page title="Frequently Asked Questions" image={ImageDeLorean}>
                <div className="desktop-three-quarters mobile-whole left info">
                    <div className="info-item">
                        <a class="anchor" id="1"></a>
                        <h4>Where is the FLPolyCon located?</h4>
                        <ul>
                            <li><p>FLPolyCon is located on the main campus of Florida Polytechnic University at the address: <p><b>4700 Research Way, Lakeland, FL, 33805</b></p></p></li>
                            <li><p>On the day of the event, please follow the event signs that will direct you to the correct location.</p></li>
                        </ul>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="2"></a>
                        <h4>Is there free parking?</h4>
                        <p>The price of parking is included with your event pass. Please see our parking map for instructions on how to navigate to the respective parking lots. On the day of the event, please follow the event signs that will direct you to the correct location.</p>
                    </div>


                    <div className="info-item">
                        <a class="anchor" id="3"></a>
                        <h4>How much is a ticket to FLPolyCon?</h4>
                        <ul>
                            <li><p>Pre-registered Tickets: $15</p></li>
                            <li><p>At Door Tickets: $20</p></li>
                            <li><p>Children 12 & Under: Free</p></li>
                            <li><p>Elderly 60 & Over: Free</p></li>
                            <li><p><b>FLPolyCon is free to all Florida Polytechnic University Students.</b></p></li>
                            <li><p style={{color: "red"}}><b><u>We will not be accepting cash for payment for a ticket at the door. We will only be accepting credit card and pre-registrations.</u></b></p></li>
                        </ul>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="4"></a>
                        <h4>Why can’t I use cash to pay for my ticket at the door?</h4>
                        <p>FLPolyCon is an event held by students at Florida Polytechnic University for students at Florida Polytechnic University and therefore we operate underneath Florida Polytechnic University's policies and guidelines.</p>
                        <p>FLPolyCon does not allow cash payments underneath Florida Polytechnic University's policies and guidelines.</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="5"></a>
                        <h4>Can I refund my ticket?</h4>
                        <p>Tickets are non-refundable under any circumstances. Please contact us with any questions regarding this matter.</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="6"></a>
                        <h4>What types of payment can I use for pre-registration?</h4>
                        <p>We accept only major credit cards for pre-registration through our online ticketing system. No checks, mail, COD, etc.</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="7"></a>
                        <h4>Do I need a parent/guardian with me?</h4>
                        <p>All attendees that are under the age of 12 must have a parent or guardian who is attending FLPolyCon on the premises at all times. No exceptions will be made.</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="8"></a>
                        <h4>How can I host a Panel/Workshop/Event?</h4>
                        <p>Please see our Application page for the link to the Event Application. The application form has all relevant information regarding the details of the event. You will receive a notice on whether it is approved or denied by our Events Department. Panel Hosts are given free admission to the convention as a thanks for providing entertainment to the convention.</p>
                        <p>You will receive a notice on whether it is approved or denied by our Events Department.</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="9"></a>
                        <h4>Can I select where/when I can be placed as a Panel/Workshop/Event?</h4>
                        <p>In order to maximize space and organize events efficiently, the Events Department of FLPolyCon and Layout Department of FLPolyCon will be responsible for organization.</p>
                        <p>If you have specific accommodations, please write them in the Event Application, and we will try to accommodate you to the best of our ability.</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="10"></a>
                        <h4>How can I become a Merchant?</h4>
                        <p>Please see our Application page for the link to the Merchant Application. The application form has all relevant information regarding the details of your booth. You will receive a notice on whether it is approved or denied by our Merchants Department.</p>
                        <p>There are two available categories for Merchants:</p>
                        <ul>
                            <li><p>8ft x 3ft table: This comes with a free food voucher for the food trucks.</p></li>
                            <li><p>A 10ftx10ft space unit: This comes with a free food voucher for the food trucks.</p></li>
                            <li><p>Please see the Merchants Application on the Applications Page for more information and details.</p></li>
                        </ul>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="11"></a>
                        <h4>Can I select where I can be placed as a Merchant?</h4>
                        <p>In order to maximize space and display merchandise efficiently, the Merchants Department of FLPolyCon and Layout Department of FLPolyCon will be responsible for organization.</p>
                        <p>If you have specific accommodations, please write them in the Merchants Application, and we will try to accommodate you to the best of our ability.</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="12"></a>
                        <h4>Will my Panel/Workshop/Event show up on the website and in the FLPolyCon guide?</h4>
                        <p>We have a cutoff for the con guide printing, but all approved panels will display on the website in their designated room and time slot, and all approved panels will be included in the printed convention guidebook.</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="13"></a>
                        <h4>I have a question that is not answered here.</h4>
                        <p>Please see the Contact Page or e-mail <b>support@flpolycon.org</b> on contacting the respective department for your needs.</p>
                    </div>
                </div>
                <div className="desktop-quarter mobile-whole right">
                    <div class="jump-board">
                        <h3>Table of Contents</h3>
                        <ul>
                            <li><a href="#1">Where is the FLPolyCon located?</a></li>
                            <li><a href="#2">Is there free parking?</a></li>
                            <li><a href="#3">How much is a ticket to FLPolyCon?</a></li>
                            <li><a href="#4">Why can’t I use cash to pay for my ticket at the door?</a></li>
                            <li><a href="#5">Can I refund my ticket?</a></li>
                            <li><a href="#6">What types of payment can I use for pre-registration?</a></li>
                            <li><a href="#7">Do I need a parent/guardian with me?</a></li>
                            <li><a href="#8">How can I host a Panel/Workshop/Event?</a></li>
                            <li><a href="#9">Can I select where/when I can be placed as a Panel/Workshop/Event?</a></li>
                            <li><a href="#10">How can I become a Merchant?</a></li>
                            <li><a href="#11">Can I select where I can be placed as a Merchant?</a></li>
                            <li><a href="#12">Will my Panel/Workshop/Event show up on the website and in the FLPolyCon guide?</a></li>
                            <li><a href="#13">I have a question that is not answered here.</a></li>
                        </ul>
                    </div>
                </div>
            </Page>
        );
    }
}