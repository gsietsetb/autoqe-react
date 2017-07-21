import React from "react";
import {Label} from "react-bootstrap";

export default class HowWorksComp extends React.Component {
    render() {
        return (
            <section className="section section-main">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">
                            Tu solución de transporte en tres clicks
                            <Label bsStyle="success" Fácil y seguro/>
                        </h1>
                        <div className="section-header-text">
                            <h3>Cómo funciona:</h3>
                            <iframe width="auto" height="auto" src="https://www.youtube.com/embed/4_Tw2Fnd21Q" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </header>
            </section>
        );
    }
}
