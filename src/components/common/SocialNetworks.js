import React, {Component} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';


import contact from '../../img/icons/material/contact.svg'

export default class SocialNetworkComp extends Component {
    render() {
        return (
            <section className="section contactBanner" id="section-what-it-does">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">
                            <img src={contact} height={30} alt="Build Customer Loyalty"/>
                            Redes Sociales</h1>
                        <div className="section-header-text">
                            <p>Síguenos en nuestras redes sociales para no perderte ninguna promoción</p>
                            {/*Linkedin*/}
                            <script type="IN/FollowCompany" data-id="16232988" data-counter="right"/>
                            &nbsp; &nbsp;
                            {/*Youtube*/}
                            <div className="g-ytsubscribe" data-channelid="UC7RUb3Ieez8Pl9uLIhZclyQ"
                                 data-layout="default" data-count="default"/>
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
                            <div className="sub-section-text">
                                <div className="fb-page"
                                     data-href="https://www.facebook.com/autoqe"
                                     data-small-header="true"
                                     data-adapt-container-width="true"
                                     data-hide-cover="false"
                                     data-show-facepile="true">
                                    <blockquote cite="https://www.facebook.com/autoqe"
                                                className="fb-xfbml-parse-ignore">
                                        <a href="https://www.facebook.com/autoqe">Autoqe</a>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/*Instagram:*/}
                        <div className="grid-item sub-section">
                            <div className="sub-section-text">
                                {/*<blockquote className="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:33.33333333333333% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BW-SfInFBRp/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Pronto podrás sentir la libertad de alquilar un auto o compartir trayectos de la manera más facil y barata #economiaColaborativa #autoqe</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by Autoqe, Auto al toque (@autoqe) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2017-07-25T14:41:22+00:00">Jul 25, 2017 at 7:41am PDT</time></p></div></blockquote> <script async defer src="//platform.instagram.com/en_US/embeds.js"></script>*/}
                                {/*<InstagramEmbed*/}
                                    {/*url='https://www.instagram.com/p/BWcbc2gFoTX/?taken-by=autoqe'*/}
                                    {/*maxWidth={320}*/}
                                    {/*hideCaption={true}*/}
                                    {/*containerTagName='div'*/}
                                    {/*protocol=''*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
