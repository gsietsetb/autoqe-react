import React, {Component} from "react";
import InstagramEmbed from "react-instagram-embed";
import {Button, Glyphicon, Image} from "react-bootstrap";
import android_badge from "../img/icons/google-play-badge.svg"
import ios_badge from "../img/icons/app-store-badge.svg"

export default class ContactComp extends Component {
    render() {
        return (
            <section className="section contactBanner" id="section-what-it-does">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">Contáctanos</h1>
                        <img height={60} src={android_badge}/>
                        <img height={60} src={ios_badge}/>

                        <div className="section-header-text">
                            <p>Síguenos en redes sociales para no perderte ninguna promoción</p>

                            {/*Linkedin*/}
                            <script type="IN/FollowCompany" data-id="16232988" data-counter="right"></script>
                            &nbsp; &nbsp;
                            {/*Youtube*/}
                            <div className="g-ytsubscribe" data-channelid="UC7RUb3Ieez8Pl9uLIhZclyQ"
                                 data-layout="default" data-count="default"></div>
                            &nbsp; &nbsp;
                            {/*Twitter*/}
                            <a className="twitter-follow-button"
                               href="https://twitter.com/autoqe"/>
                            {"\n"}
                        </div>
                        <Button href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=contact@autoqe.com&amp;cc=gsierra@guillesierra.com&amp;su=Contacto Autoqe&amp;body=Buenas tardes, me gustaría recibir más información acerca de..."><Glyphicon glyph="envelope"/> &nbsp; contact@autoqe.com</Button>
                    </div>
                </header>
                <div className="container">
                    <div className="grid-row-two-up-skinny">
                        {/*Facebook:*/}
                        <div className="grid-item sub-section">
                            {/*<img src="http://d12f605tss7gg2.cloudfront.net/uploads/icons/icon-users.svg" alt="Build Customer Loyalty" className="sub-section-icon"/>*/}
                            <div className="sub-section-text">
                                <div className="fb-page" data-href="https://www.facebook.com/autoqe"
                                     data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
                                     data-show-facepile="true">
                                    <blockquote cite="https://www.facebook.com/autoqe"
                                                className="fb-xfbml-parse-ignore">
                                        <a href="https://www.facebook.com/autoqe">Autoqe</a></blockquote>
                                </div>
                            </div>
                        </div>

                        {/*Instagram:*/}
                        <div className="grid-item sub-section">
                            <div className="sub-section-text">
                                <InstagramEmbed
                                    url='https://www.instagram.com/p/BWcbc2gFoTX/?taken-by=autoqe'
                                    maxWidth={320}
                                    hideCaption={true}
                                    containerTagName='div'
                                    protocol=''
                                    onLoading={() => {
                                    }}
                                    onSuccess={() => {
                                    }}
                                    onAfterRender={() => {
                                    }}
                                    onFailure={() => {
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/**/}
            </section>
        );
    }
}
