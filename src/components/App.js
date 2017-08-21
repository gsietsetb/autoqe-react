import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css'
import Auth0Lock from 'auth0-lock';
import NavbarComponent from "./common/Header";
import Footer from "./common/Footer";
import Main from "./Routes";

const optionsAuth0 = {
    language: 'es',
    theme: {
        logo: 'https://www.autoqe.com/autoqe_s.png',
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


