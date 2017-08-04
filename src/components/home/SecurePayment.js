import React, {Component} from 'react';
import {Image} from 'react-bootstrap';


import stripe from "../../img/brands/stripe_w.png";
import paypal from "../../img/brands/paypal_w.png";
import visa from "../../img/brands/visa_w.png";
import mastercard from "../../img/brands/mastercard_w.png";
import american from "../../img/brands/American-Expres_w.png";

import lock from '../../img/icons/material/lock.svg'

export default class SecurePayment extends Component {
    render() {
        return (
            <div>
                <section className="section contactBanner" id="section-what-it-does">
                    <header className="section-header">
                        <div className="container">
                            <h3 className="section-header-title">
                                <img src={lock} height={30} alt="Secure payment"/> &nbsp;
                                Plataformas de pago seguro</h3>
                            <div className="section-header-text">
                                {/*<Image src={rapipago} height="60"/> &nbsp;*/}
                                {/*<Image src={mPago} height="60"/> &nbsp;*/}
                                <Image src={mastercard} height="60"/> &nbsp;
                                <Image src={visa} height="60"/> &nbsp;
                                <Image src={american} height="60"/> &nbsp;
                                <Image src={stripe} height="60"/> &nbsp;
                                <Image src={paypal} height="60"/> &nbsp;
                            </div>
                        </div>
                    </header>
                </section>
            </div>

        );
    }
}
