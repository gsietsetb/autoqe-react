import React, {Component} from 'react';
import {Glyphicon, Label} from "react-bootstrap";

export default class Green extends Component {
    render() {
        return (
            <section className="section">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">
                            Ciudad verde: &nbsp;
                            <Label bsStyle="success">
                                <Glyphicon glyph="leaf"/>&nbsp;
                                Ayudá al medioambiente</Label>
                        </h1>
                        <div className="section-header-text" height={500}>
                            <h3>Reduce la contaminación, la huella ecológica </h3>
                        </div>

                    </div>
                </header>
            </section>
        );
    }
}
