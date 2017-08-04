import React from "react";
import {Image} from "react-bootstrap";

import baires from "../../img/brands/BA2016.png";
import colon from "../../img/brands/colon.png";
import sura from "../../img/brands/logo-sura.png";

export default class TalkAboutComp extends React.Component {
    render() {
        return (
            <section className="section section-main" id="section-what-it-does">
                <header className="section-header">
                    <div className="container">
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
