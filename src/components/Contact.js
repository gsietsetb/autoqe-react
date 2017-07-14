import React, {Component} from 'react';
import InstagramEmbed from 'react-instagram-embed';
import {Button, Glyphicon} from 'react-bootstrap';

export default class ContactComp extends Component {
  render() {
    return (
      <section className="section contactBanner" id="section-what-it-does">
        <header className="section-header">
          <div className="container">
            <h1 className="section-header-title">
              <img src="http://d12f605tss7gg2.cloudfront.net/uploads/icons/icon-users.svg" alt="Build Customer Loyalty"/>
              Contáctanos</h1>
            <div className="section-header-text">
              <p>Síguenos en redes sociales para no perderte ninguna promoción</p>

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
                <div className="fb-page" data-href="https://www.facebook.com/autoqe"
                     data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
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
                <InstagramEmbed
                  url='https://www.instagram.com/p/BWcbc2gFoTX/?taken-by=autoqe'
                  maxWidth={320}
                  hideCaption={true}
                  containerTagName='div'
                  protocol=''
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
