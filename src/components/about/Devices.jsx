import React from "react";
import {Image} from "react-bootstrap";
import mockup from "../../img/mockup/autoqe_mockup.png";
import android from "../../img/icons/google-play-badge.svg";
import ios from "../../img/icons/app-store-badge.svg";

export default class Intro extends React.Component {
    render() {
        return (
            <section className="section section-dark" id="section-intro">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">
                            {/*<img alt="" src={autoqe_gray} className="main-icon"/>&bnsp;*/}
                            Una aplicación de transporte para tod@s</h1>
                        <div className="section-header-text">
                            <p>Todas las soluciones de transporte alrededor tuyo en una única aplicación:</p>

                            <Image style={{marginBottom: '4em'}} responsive src={mockup}/>
                            {/*<Image responsive src={s8} height="600"  className=""/>*/}
                            <Image src={ios} className="brand-logo"/>
                            <Image src={android} className="brand-logo"/>
                        </div>
                    </div>
                </header>
            </section>
        );
    }
}
