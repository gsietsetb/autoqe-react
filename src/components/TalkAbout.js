import React from "react";
import {Image} from "react-bootstrap";

import baires from "../img/brands/BA2016.png";
import colon from "../img/brands/colon.png";
import sura from "../img/brands/logo-sura.png";

import stripe from "../img/brands/stripe.png";
import paypal from "../img/brands/paypal.png";
import mPago from "../img/brands/mercadopago.png";
import visa from "../img/brands/visamastercard.jpg";
import rapipago from "../img/brands/rapipago.png";

export default class TalkAboutComp extends React.Component {
    render() {
        return (
            <section className="section section-main" id="section-what-it-does">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">Hablan de nosotros</h1>
                        <div className="section-header-text">

                            <p>Plataformas de pago seguro soportadas:</p>
                            <Image src={rapipago} height="60"/>
                            <Image src={mPago} height="60"/>
                            <Image src={paypal} height="60"/>
                            <Image src={stripe} height="60"/>
                            <Image src={visa} height="60"/>
                            {'\n'}
                            {'\n'}
                        </div>
                        <div className="section-header-text">
                            <p>Con el soporte de:</p>
                            <Image src={baires} height="60"/>
                            <Image src={colon} height="60"/>
                            <Image src={sura} height="60"/>
                        </div>
                    </div>
                </header>
            </section>
        );
    }
}
