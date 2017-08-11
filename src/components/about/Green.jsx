import React, {Component} from 'react';
import {Glyphicon, Label} from "react-bootstrap";
import green from "../../img/icons/material/leaf.svg"

export default class Green extends Component {
    render() {
        return (
            <section className="section">
                <header className="section-header">
                    <div className="container">
                        <h3 className="section-header-title">
                            <img src={green} className="icon-title" alt="Secure payment"/>&nbsp;
                            Colaborá con el&nbsp;
                            <Label bsStyle="success">
                                <Glyphicon glyph="leaf"/>&nbsp;
                                medioambiente</Label>
                        </h3>
                        <div className="section-header-text" height={500}>
                            <h3>Reduce la contaminación, la huella ecológica </h3>
                        </div>

                    </div>
                </header>
            </section>
        );
    }
}
