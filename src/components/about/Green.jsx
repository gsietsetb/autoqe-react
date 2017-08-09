import React, {Component} from 'react';
import {Button, Glyphicon} from "react-bootstrap";

export default class Green extends Component {
    render() {
        return (
            <section className="">
                <div className="section-header">
                    <h2> Este es nuestro stack.</h2>
                    <p>Si te sientes identificado
                        <Button> <Glyphicon glyph="team"/> Trabaja con nosotros
                        </Button>
                    </p>
                </div>
                <a frameBorder="0" data-theme="light" data-stack-embed="true"
                   data-layers="1,2,3,4"
                   href="https://embed.stackshare.io/stacks/embed/76589f4f56a2a70b2d519f1af61965"/>
            </section>
        );
    }
}
