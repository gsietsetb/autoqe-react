import React, {Component} from 'react';
import NavbarComponent from "./common/Navbar";
import Footer from "./common/Footer";
import Navigator from "./Navigator";
//Global Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css'
import '../styles/buttons.css'
import '../styles/icons.css'

/**todo deprecate auth0
 *
 * @type {{language: string, theme: {logo: string, primaryColor: string}}}

const optionsAuth0 = {
    language: 'es',
    theme: {
        logo: 'https://www.autoqe.com/autoqe.png',
        primaryColor: '#122b40'
    }
};*/

class AppComponent extends Component {

    componentWillMount() {
/*
        this.lock = new Auth0Lock('06DohMivFjjWe43rAOM0Pi1sdr62TAs9', 'autoqe.auth0.com', optionsAuth0);
*/
        // this.lock = new Auth0Lock(process.env.AUTH0_ID, process.env.DOMAIN);
    }
    componentDidMount() {
        // document.addEventListener('fb_init', e => FB.XFBML.parse());
    }

    render() {
        return (
            <div>
                <NavbarComponent lock={this.lock}/>
                <section style={{marginTop: 69}}>
                    {/*<Main history={this.props.history}/>*/}
                    <Navigator/>
                    {/*<Switch>*/}
                        {/*<Route path='/' component={HomePage}/>*/}
                        {/*<Route path='/home' component={HomePage}/>*/}
                        {/*/!*<Route path='/' component={HomePage}/>*!/*/}
                        {/*/!*Services*!/*/}
                        {/*<Route path="/trips" component={TripsPage}/>*/}
                        {/*/!*<Route path="/car" component={ContactComp}/>*!/*/}

                        {/*/!*Trips*!/*/}
                        {/*<Route path="/trips" component={TripsPage}>*/}e
                            {/*<Route path="/trips/new" component={NewTripPage}/>*/}
                            {/*<Route path="/trips/:id" component={TripPage}/>*/}
                        {/*</Route>*/}

                        {/*<Route path="/contact" component={ContactComp}/>*/}

                        {/*/!*About*!/*/}
                        {/*<Route path="/green" component={Green}/>*/}
                        {/*<Route path="/dev" component={Dev}/>*/}
                        {/*<Route path="/contact" component={ContactComp}/>*/}
                        {/*<Route path="/contact" component={ContactComp}/>*/}
                        {/*<Route path="/contact" component={ContactComp}/>*/}
                        {/*<Route path="/contact" component={ContactComp} />*/}
                        {/*/!*<Route path="/about" component={AboutPage} />*!/*/}
                        {/*<Route path='/find' component={SearchBarComp} />*/}
                        {/*/!*Users*!/*/}
                        {/*<Route path='/contact/:id' component={ContactDetail} />*/}
                        {/*/!*Trips*!/*/}

                        {/*/!*<Route path='/trips/:id' component={TripDetailComponent} />*!/*/}
                        {/*/!*<Route path='/trips' component={TripGrid} />*!/*/}
                    {/*</Switch>*/}
                </section>
                <Footer/>
            </div>
        );
    }
}

AppComponent.propTypes = {
    // children: PropTypes.object.isRequired
};

export default AppComponent;


