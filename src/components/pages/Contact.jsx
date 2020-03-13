import React from 'react';

import Template from '../Template';
import Page from '../Page';
import ContactItem from '../ContactItem';

import ImageBuildings from '../../static/img/buildings-2.jpg';
import ImageStaffVincentHael from '../../static/img/staff/VincentHael.jpg';
import ImageStaffReneeCurly from '../../static/img/staff/AReneeCurly.jpg';
import ImageStaffDavidCiccarello from '../../static/img/staff/DavidCiccarello.jpg';
import ImageStaffJakeGreenberg from '../../static/img/staff/JakeGreenberg.jpg';
import ImageStaffMadisenDietz from '../../static/img/staff/MadisenDietz2.jpg';
import ImageStaffRaphaelRestrepo from '../../static/img/staff/RaphaelRestrepo.jpg';
import ImageStaffRubenLevy from '../../static/img/staff/RubenLevy2.jpg';
import ImageStaffTarynJones from '../../static/img/staff/TarynJones.jpg';
import ImageStaffCrystalTong from '../../static/img/staff/CrystalTong.jpg';
import ImageStaffKatNewell from '../../static/img/staff/KatNewell.jpg';
import ImageStaffPlaceholder from '../../static/img/placeholder.jpg';

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
                <div className="desktop-whole mobile-whole left contact">
                    <div class="contact-info desktop-half mobile-whole left" style={{top: "13px", position: "relative"}}>
                        <div class="contact-detail">
                            <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                            <p class="no-margin"><b>E-mail</b></p>
                            <p class="no-margin">administration@flpolycon.org</p>
                        </div>
                        <h2>Administration</h2>
                        <ContactItem name="Jake Greenberg" position="Lead Director" email="administration@flpolycon.org" image={ImageStaffJakeGreenberg}/>
                        <ContactItem name="Ruben Levy" position="Director" email="administration@flpolycon.org" image={ImageStaffRubenLevy}/>
                        
                        <h2>Events</h2>
                        <ContactItem name="David Ciccarello" position="Event & Maid Cafe Coordinator" email="events@flpolycon.org" image={ImageStaffDavidCiccarello}/>
                        <ContactItem name="Taryn Jones" position="Event Coordinator" email="events@flpolycon.org" image={ImageStaffTarynJones}/>
                        <ContactItem name="Jonathan Hopper" position="Event Coordinator" email="events@flpolycon.org" image={ImageStaffPlaceholder}/>
                        <ContactItem name="Bruce Cheung" position="Event Coordinator" email="events@flpolycon.org" image={ImageStaffPlaceholder}/>
                        <ContactItem name="Christian Rodriguez" position="Event Coordinator" email="events@flpolycon.org" image={ImageStaffPlaceholder}/>

                        <h2>Layout</h2>
                        <ContactItem name="Alex Mactavish" position="Layout Coordinator" email="administration@flpolycon.org" image={ImageStaffPlaceholder}/>
                        <ContactItem name="Nate Rabideau" position="Layout Coordinator" email="administration@flpolycon.org" image={ImageStaffPlaceholder}/>
                        <ContactItem name="Maxwell Schad" position="Layout Coordinator" email="administration@flpolycon.org" image={ImageStaffPlaceholder}/>

                        <h2>Talent & Cosplay</h2>
                        <ContactItem name="Madisen Dietz" position="Talent & Cosplay Coordinator" email="cosplay@flpolycon.org" image={ImageStaffMadisenDietz}/>
                        
                        <h2>Merchants</h2>
                        <ContactItem name="A. Renee Curly" position="Merchants Coordinator" email="merchants@flpolycon.org" image={ImageStaffReneeCurly}/>
                        <ContactItem name="Crystal Tong" position="Merchants Coordinator" email="merchants@flpolycon.org" image={ImageStaffCrystalTong}/>
                        <ContactItem name="Aimee Wright" position="Merchants Coordinator" email="merchants@flpolycon.org" image={ImageStaffPlaceholder}/>

                        <h2>Logistics</h2>
                        <ContactItem name="Andre Infante" position="Logistics Coordinator" email="logistics@flpolycon.org" image={ImageStaffPlaceholder}/>
                        <ContactItem name="Yesabel Ruiz" position="Logistics Coordinator" email="logistics@flpolycon.org" image={ImageStaffPlaceholder}/>

                        <h2>Volunteers</h2>
                        <ContactItem name="Kaylee Funaro" position="Volunteers Coordinator" email="volunteers@flpolycon.org" image={ImageStaffPlaceholder}/>
                        <ContactItem name="Alyssa Schroeder" position="Volunteers Coordinator" email="volunteers@flpolycon.org" image={ImageStaffPlaceholder}/>
                        <ContactItem name="Kelvin Zhang" position="Volunteers Coordinator" email="volunteers@flpolycon.org" image={ImageStaffPlaceholder}/>

                        <h2>After Party</h2>
                        <ContactItem name="Raphael Restrepo" position="After Party & AV Coordinator" email="afterparty@flpolycon.org" image={ImageStaffRaphaelRestrepo}/>
                        <ContactItem name="Sam Rodriguez" position="After Party & AV Coordinator" email="afterparty@flpolycon.org" image={ImageStaffPlaceholder}/>

                        <h2>Vincent</h2>
                        <ContactItem name="Vincent Hael" position="Vincent" email="vincent@vincent.vincent" image={ImageStaffVincentHael}/>

                        <div class="cf"></div>
                    </div>
                    <div class="contact-form-box desktop-half mobile-whole right">
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