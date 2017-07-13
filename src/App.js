import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import NavbarComp from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import CarouselComp from "./Components/Carousel";
import ServiceComp from "./Components/Services";
import FooterComp from "./Components/Footer";
import ContactComp from "./Components/Contact";


const styles = {
    primary: {
        backgroundColor: '#122b40'
    },
    secondary: {
        backgroundColor: '#00b1ff'
    },
    button: {
        padding: '1em'
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // twttr.widgets.load()
    }
    render() {
        return (
            <div className="App">
                <NavbarComp/>
                <CarouselComp/>
                <SearchBar/>
                <ServiceComp/>
                <ContactComp/>
                <FooterComp/>
            </div>
        );
    }
}

export default App;
