import React from 'react';
import {Link} from 'react-router-dom';

import Page from '../Page';
import Advisory from '../Advisory';

export default class Policies extends React.Component {
    render() {
        return (
            <Page title="Policies">
                <Advisory iconClass="fas fa-info-circle" message="FLPolyCon reserves the right to amend or change these rules/policies at anytime for any reason to provide for the safety, security and general well-being of the attendees and the general public."/>
                <div className="desktop-quarter mobile-whole right">
                    <div className="jump-board">
                        <h3>Table of Contents</h3>
                        <ul>
                            <li><a href="#cash-for-registration-payment">Cash for Registration Payment</a></li>
                            <li><a href="#attendance-refund-policy">Attendance Refund Policy</a></li>
                            <li><a href="#prop-and-costume-policies">Prop and Costume Policies</a></li>
                            <li><a href="#purchased-props-and-weapons">Purchased Props and Weapons</a></li>
                            <li><a href="#small-wheeled-devices">Small Wheeled Devices</a></li>
                            <li><a href="#prohibited-physical-actions">Prohibited Physical Actions</a></li>
                            <li><a href="#vendor-hall-transactions">Vendor Hall Transactions</a></li>
                            <li><a href="#costume-policy">Costume Policy</a></li>
                            <li><a href="#cosplay-is-not-consent">Cosplay is NOT Consent</a></li>
                            <li><a href="#strict-harassment-policy">Strict Harassment Policy</a></li>
                            <li><a href="#types-of-convention-staff">Types of Convention Staff</a></li>
                            <li><a href="#photography-at-FLPolyCon">Photography at FLPolycon</a></li>
                            <li><a href="#liability-at-flpolycon">Liability at FLPolycon</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="policies info desktop-three-quarters mobile-whole left">

                    <div className="info-item">
                        <a class="anchor" id="cash-for-registration-payment"></a>
                        <h4>Cash for Registration Payment</h4>
                        <p>We <b>do not</b> accept cash payments to register for a ticket under any circumstances. Please pre-register or register online using a credit card. Please pre-register or register online using a credit card. Please contact us with any questions regarding this matter at the e-mail - support@flpolycon.org</p>
                    </div>


                    <div className="info-item">
                        <a class="anchor" id="attendance-refund-policy"></a>
                        <h4>Attendance Refund Policy</h4>
                        <p>Tickets are non-refundable under any circumstances. Please pre-register or register online using a credit card. Please contact us with any questions regarding this matter at the e-mail - support@flpolycon.org</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="prop-and-costume-policies"></a>
                        <h4>Prop and Costume Policies</h4>
                        <p>View our extensive prop and costume policies <a href="http://files.FLPolyCon.org/FLPolyCon_2020_-_Prop_and_Costume_Policy.pdf">here</a>!</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="purchased-props-and-weapons"></a>
                        <h4>Purchased Props and Weapons</h4>
                        <p>Any imitation weapons or replica swords or knives must remain in the original packaging until the attendee is off of the University’s property.</p>
                        <p>If you would like to use the purchased piece as a part of your costume the item must be presented to the prop check desk in its original packaging. If approved it may be used in accordance to the rules stated within the Props and Costume Policy.</p>
                        <p>If the item is denied approval then it must remain in its original packaging.</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="small-wheeled-devices"></a>
                        <h4>Small Wheeled Devices</h4>
                        <ul>
                            <li><p>The usage of small wheeled devices such as (roller skates, skateboards, wheeled shoes) is prohibited:</p></li>
                        </ul>
                        <ol type="a">
                            <li><p>Inside any and all buildings on the campus.</p></li>
                            <li><p>Within fifteen (15) feet of the convention building and all other campus building entrances.</p></li>
                            <li><p>On the convention building first floor sidewalks and outer perimeter and the entrances immediately surrounding the IST building.</p></li>
                            <li><p>Anywhere on the second floor terrace of the main convention building.</p></li>
                        </ol>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="prohibited-physical-actions"></a>
                        <h4>Prohibited Physical Actions</h4>
                        <ul>
                            <li><p>Climbing in any areas, buildings, facilities, and/or exterior and interior locations that are not designated for climbing.</p></li>
                            <li><p>Rappelling</p></li>
                        </ul>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="vendor-hall-transactions"></a>
                        <h4>Vendor Hall Transactions</h4>
                        <p>Any transactions with any event attendees are exclusively between the following two parties: the merchant and the attendee. No merchant may say anything to any prospective customers at the event that may imply that FLPolyCon provides any such guarantees about items being sold.</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="costume-policy"></a>
                        <h4>Costume Policy</h4>
                        <ul>
                            <li><p>It is required that all attendees wear clothing that covers at least the areas normally obscured by standard bathing suits. However, we advise you to keep in mind that this is a student run convention hosted at a local university. Since there will be students, parents, and university staff in attendance, we suggest you wear clothing with a modesty level that would be appropriate at your educational or professional institution.</p></li>
                            <li><p>FLPolyCon does not actively discourage cosplay of any character, but we do ask that you demonstrate proper tact in your cosplay. If a character, or the show from which the character comes, seems like it may be in poor taste due to current events, we suggest you retire that cosplay for a while.</p></li>
                        </ul>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="cosplay-is-not-consent"></a>
                        <h4>Cosplay is NOT Consent</h4>
                        <p>If you would like to take a picture with or another attendee, always ask first and respect that person’s right to say no.</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="strict-harassment-policy"></a>
                        <h4>Strict Harassment Policy</h4>
                        <p>Harassment of any kind is not permitted. This includes bullying, touching or rude remarks. Situation of harassments are dealt with very harshly, and depending on the situation can range from warnings to removal from the convention by convention staff.</p>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="types-of-convention-staff"></a>
                        <h4>Types of Convention Staff</h4>
                        <ul>
                            <li><p>STAFF: These are department heads and the people directly underneath them. Staff has the final authority on any decision regarding your behavior or any other policy.</p></li>
                            <li><p>SPECIAL GUESTS: People wearing a Special Guest badge are special guests of the convention. Treat them with politeness and respect.</p></li>
                            <li><p>VOLUNTEERS: Volunteers are the people who are working to ensure the convention is carried out in an orderly manner. These people are badge checkers and have stationed positions throughout the convention who have received direct instruction from the staff.</p></li>
                        </ul>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="photography-at-FLPolyCon"></a>
                        <h4>Photography at FLPolyCon</h4>
                        <ul>
                            <li><p>Our social media team and our Marketing Department will be taking pictures, video, and audio recording of the event throughout the day. By attending the event, you agree to be photographed or recorded during the event by our Social Media team or our Marketing Department.</p></li>
                            <li><p>Photography of the room or photography of the event hosts are not allowed. Those found to be taking pictures will be asked to stop and may be removed from the area.</p></li>
                        </ul>
                    </div>

                    <div className="info-item">
                        <a class="anchor" id="liability-at-FLPolyCon"></a>
                        <h4>Liability at FLPolyCon</h4>
                        <p>FLPolyCon, its staff and its affiliates are not responsible for any loss, damage, theft, or injury occurring during the convention. Attendees are wholly responsible for their individual actions and any repercussions that may result. Staff is on hand for assistance in any situation, and will be glad to help in any way they can. Civil or medical emergencies will be handled by the appropriate agencies.</p>
                    </div>
                </div>
                
            </Page>
        );
    }
}