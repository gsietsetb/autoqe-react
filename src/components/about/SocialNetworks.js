import React, {Component} from 'react';
import {Button, Glyphicon, Label, Panel, Row} from 'react-bootstrap';


import contact from '../../img/icons/material/contact.svg'
import fb from '../../img/icons/social_network/facebook.svg'
import tw from '../../img/icons/material/twitter.svg'
import inst from '../../img/icons/social_network/instagram.svg'
import {Link} from "react-router-dom";
import InstagramEmbed from "react-instagram-embed";

export default class SocialNetworkComp extends Component {
    render() {
        return (
            <section className="section" id="section-what-it-does">
                <header className="section-header section-dark">
                    <div className="container">
                        <h1 className="section-header-title">
                            <img src={contact} height={30} alt="Build Customer Loyalty"/>&nbsp;
                            Redes Sociales</h1>
                        <Row className="social-container">
                            <h4>Síguenos y suscribete a nuestros canales no perderte ninguna promoción!</h4>
                            <h2>   {/*<iframe*/}
                                {/*src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fautoqe%2F&width=67&layout=button_count&action=like&size=small&show_faces=true&share=false&height=21&appId=1857064684552937"*/}
                                {/*width="67" height="21" style="border:none;overflow:hidden" scrolling="no"*/}
                                {/*frameBorder="0" allowTransparency="true"/>*/}
                                {/*Facebook 1 line*/}
                                {/*<div className="fb-like" data-href="https://www.facebook.com/autoqe/"*/}
                                {/*data-layout="standard"*/}
                                {/*data-action="like" data-size="small" data-show-faces="false" data-share="true"/>*/}
                                {/*&nbsp; &nbsp;*/}
                                <script type="IN/FollowCompany" data-id="16232988" data-counter="right"/>
                                {/*Twitter*/}
                                {/*<Link className="twitter-follow-button" href="https://twitter.com/autoqe"/>&nbsp; &nbsp;*/}
                                {/*Youtube*/}
                                <div className="g-ytsubscribe" data-channelid="UC7RUb3Ieez8Pl9uLIhZclyQ"
                                     data-layout="default" data-theme="dark" data-count="default"/>
                                &nbsp; &nbsp;
                            </h2>
                        </Row>

                        <div className="section-header-text">
                            {/*<p>Síguenos en nuestras redes sociales para no perderte ninguna promoción</p>*/}
                            {/*/!*Linkedin*!/*/}
                            {/*<script type="IN/FollowCompany" data-id="16232988" data-counter="right"/>*/}
                            {/*&nbsp; &nbsp;*/}
                            {/*/!*Youtube*!/*/}
                            {/*<div className="g-ytsubscribe" data-channelid="UC7RUb3Ieez8Pl9uLIhZclyQ"*/}
                            {/*data-layout="default" data-count="default"/>*/}
                            {/*&nbsp; &nbsp;*/}
                            {/*/!*Twitter*!/*/}
                            {/*<Link className="twitter-follow-button"*/}
                            {/*href="https://twitter.com/autoqe"/>*/}
                            {/*{"\n"}*/}
                        </div>
                        <Button href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=contact@autoqe.com&amp;cc=gsierra@guillesierra.com&amp;su=Contacto Autoqe&amp;body=Buenas tardes, me gustaría recibir más información acerca de..."><Glyphicon glyph="envelope"/> &nbsp; contact@autoqe.com</Button>
                    </div>
                </header>
                <div className="container">
                    <Panel header={<div><Glyphicon glyph="piggy-bank"/> Promo Lanzamiento!</div>} className="btn-dark_gold">
                        <h4 style={{textAlign: 'left', marginLeft: '20%'}}>
                            <Row>1. Tomá una <Label className="btn-dark_gold"><Glyphicon glyph="camera"/> selfie</Label>
                               &nbsp;en tu primer trayecto en Autoqe</Row>
                            <Row>2. Compartí <Label className="btn-dark_gold"><Glyphicon glyph="share"/>  <b>#Autoqe</b></Label> en
                            <img className="icon-trip" src={inst}/>
                            <img className="icon-trip" src={fb}/>
                            <img className="icon-trip" src={tw}/></Row>
                        <Row>3. Tenés <Label className="btn-dark_gold"><Glyphicon glyph="piggy-bank"/> Viaje gratis!</Label> para los 100 primeros!</Row>
                        </h4>
                    </Panel>
                    <div className="grid-row-two-up-skinny">
                        {/*Facebook:*/}
                        <div className="grid-item sub-section">
                            <div className="sub-section-text">
                                <div className="fb-page"
                                     data-href="https://www.facebook.com/autoqe"
                                     data-small-header="false"
                                     data-adapt-container-width="true"
                                     data-hide-cover="false"
                                     data-show-facepile="true">
                                    <blockquote cite="https://www.facebook.com/autoqe"
                                                className="fb-xfbml-parse-ignore">
                                        <Link to="https://www.facebook.com/autoqe">Autoqe</Link>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/*Instagram:*/}
                        <div className="grid-item sub-section">
                            <div className="sub-section-text">
                                {/*<blockquote className="instagram-media" data-instgrm-captioned data-instgrm-version="7"*/}
                                {/*style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">*/}
                                {/*<div style="padding:8px;">*/}
                                {/*<div*/}
                                {/*style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:33.33333333333333% 0; text-align:center; width:100%;">*/}
                                {/*<div*/}
                                {/*style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"/>*/}
                                {/*</div>*/}
                                {/*<p style=" margin:8px 0 0 0; padding:0 4px;"><Link*/}
                                {/*to="https://www.instagram.com/p/BW-SfInFBRp/"*/}
                                {/*style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;"*/}
                                {/*target="_blank">Pronto podrás sentir la libertad de alquilar un auto o*/}
                                {/*compartir trayectos de la manera más facil y barata #economiaColaborativa*/}
                                {/*#autoqe</Link></p>*/}
                                {/*<p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">*/}
                                {/*A post shared by Autoqe, Auto al toque (@autoqe) on*/}
                                {/*<time*/}
                                {/*style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;"*/}
                                {/*dateTime="2017-07-25T14:41:22+00:00">Jul 25, 2017 at 7:41am PDT*/}
                                {/*</time>*/}
                                {/*</p>*/}
                                {/*</div>*/}
                                {/*</blockquote>*/}
                                {/*<script async defer src="//platform.instagram.com/en_US/embeds.js"/>*/}
                                <InstagramEmbed
                                    url='https://www.instagram.com/p/BW-SfInFBRp/?taken-by=autoqe'
                                    maxWidth={320}
                                    hideCaption={true}
                                    containerTagName='div'
                                    protocol=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
