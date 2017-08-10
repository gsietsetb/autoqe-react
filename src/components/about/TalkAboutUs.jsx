import React from "react";
import {Image} from "react-bootstrap";

import baires from "../../img/brands/BA2016.png";
import colon from "../../img/brands/colon.png";
import sura from "../../img/brands/logo-sura.png";

export default class TalkAboutComp extends React.Component {
    render() {
        return (
            <section className="section">
                {/*<header className="section-header">*/}
                {/*<div className="container">*/}
                {/*<h1 className="">*/}
                {/*Hablan de nosotros &nbsp; <Label bsStyle="warning">Forma Parte!</Label>*/}
                {/*</h1>*/}
                {/*</div>*/}
                {/*</header>*/}

                <header className="section-header">
                    <div className="container">
                        <div className="section-header-text">
                            <h3 style={{color: '#74acdf'}}>Con el soporte de:</h3>
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
