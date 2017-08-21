import React, {Component} from 'react';
import {Image} from 'react-bootstrap';

import stripe from "../../img/brands/stripe_w.png";
import paypal from "../../img/brands/paypal_w.png";
import visa from "../../img/brands/visa_w.svg";
import mastercard from "../../img/brands/mastercard_w.png";
import american from "../../img/brands/American-Expres_w.png";
import rapipago from "../../img/brands/rapipago_w.svg";
import mPago from "../../img/brands/mPago_w.svg";

import lock from '../../img/icons/material/secure_pay.svg'

export default class SecurePayment extends Component {
    render() {
        return (
            <div>
                <section className="section section-dark transparent" id="payment">
                    <header className="section-header">
                        <div className="container">
                            <h3 className="section-header-title">
                                <img src={lock} className="icon-row" alt="Secure payment"/> &nbsp;
                                Plataformas de pago seguro</h3>
                            <div className="section-header-text">
                                <Image src={rapipago} className="brand-logo"/> &nbsp;
                                <Image src={mPago} className="brand-logo"/> &nbsp;
                                <Image src={stripe} className="brand-logo"/> &nbsp;
                                <p/>
                                <p/>
                                <Image src={mastercard} className="brand-logo"/> &nbsp;
                                <Image src={visa} className="brand-logo"/> &nbsp;
                                <Image src={american} className="brand-logo"/> &nbsp;
                                <Image src={paypal} className="brand-logo"/> &nbsp;
                            </div>
                        </div>
                    </header>
                </section>
            </div>

        );
    }
}
