import React from "react";
import {Image} from "react-bootstrap";

import baires from "../../img/brands/BA2016.png";
import colon from "../../img/brands/colon.jpg";
import sura from "../../img/brands/logo-sura.png";
import press from "../../img/icons/material/press.svg"

export default class TalkAboutComp extends React.Component {
    render() {
        return (
            <section className="section">
                <header className="section-header">
                    <div className="container">
                        <h3 className="section-header-title">
                            <img src={press} className="icon-title" alt="Secure payment"/>&nbsp;
                            Con el soporte de &nbsp;
                            {/*<Label bsStyle="warning">*/}
                            {/*<Glyphicon glyph="plus-sign"/>&nbsp;*/}
                            {/*Aparecé aquí</Label>*/}
                        </h3>
                    </div>
                    <Image src={baires} className="brand-logo"/> &nbsp;
                    <Image src={sura} className="brand-logo"/> &nbsp;
                    <Image src={colon} className="brand-logo"/> &nbsp;
                </header>
            </section>
        );
    }
}
