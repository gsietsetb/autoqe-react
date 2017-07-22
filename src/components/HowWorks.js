import React from "react";
import {Label, Image} from "react-bootstrap";
import steps from "../img/banner/easy-steps.png";

export default class HowWorksComp extends React.Component {
    render() {
        return (
            <section className="section section-main">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">
                            Ahora viajar es así de sencillo:
                        </h1>
                        <div className="section-header-text" height={500}>
                            <h3>Tu solución de transporte en tres clicks  <Label>Sin intermediarios!</Label></h3>
                            <Image responsive src={steps} height={400}/>
                        </div>
                        <div>
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/4_Tw2Fnd21Q" frameborder="0" allowfullscreen/>
                        </div>
                    </div>
                </header>
            </section>
        );
    }
}
