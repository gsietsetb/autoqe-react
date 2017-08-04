import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css'
import Auth0Lock from 'auth0-lock';
import NavbarComponent from "./common/Header";
import SocialNetworks from "./common/SocialNetworks";
import FooterComponent from "./common/Footer";
import Main from "./Routes";

class AppComponent extends Component {

    componentWillMount() {
        this.lock = new Auth0Lock('06DohMivFjjWe43rAOM0Pi1sdr62TAs9', 'autoqe.auth0.com');
        // this.lock = new Auth0Lock(process.env.AUTH0_ID, process.env.DOMAIN);
    }
    componentDidMount() {
        // document.addEventListener('fb_init', e => FB.XFBML.parse());
    }

    render() {
        return (
            <div>
                <NavbarComponent lock={this.lock}/>
                {/*{this.props.children}*/}
                <Main history={this.props.history}/>
                <SocialNetworks/>
                <FooterComponent/>
            </div>
        );
    }
}

AppComponent.propTypes = {
    // children: PropTypes.object.isRequired
};

export default AppComponent;


