import React, {Component} from 'react';

import Auth0Lock from 'auth0-lock';
import NavbarComponent from "./common/Navbar";
import Footer from "./common/Footer";
import Main from "./Routes";
//Global Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css'
import '../styles/buttons.css'
import '../styles/icons.css'

const optionsAuth0 = {
    language: 'es',
    theme: {
        logo: 'https://www.autoqe.com/autoqe.png',
        primaryColor: '#122b40'
    }
};

class AppComponent extends Component {

    componentWillMount() {
        this.lock = new Auth0Lock('06DohMivFjjWe43rAOM0Pi1sdr62TAs9', 'autoqe.auth0.com', optionsAuth0);
        // this.lock = new Auth0Lock(process.env.AUTH0_ID, process.env.DOMAIN);
    }
    componentDidMount() {
        // document.addEventListener('fb_init', e => FB.XFBML.parse());
    }

    render() {
        return (
            <div>
                <NavbarComponent lock={this.lock}/>
                <Main history={this.props.history}/>
                <Footer/>
            </div>
        );
    }
}

AppComponent.propTypes = {
    // children: PropTypes.object.isRequired
};

export default AppComponent;


