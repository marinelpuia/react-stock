import React from "react";
import ReactDOM from "react-dom";
import VegetablesAndFruits from "./VegetablesAndFruits";
import Navigation from "./Navigation";
import Footer from"./Footer";
import './index.css';

function App() {
    return (
        <div className="main">
            <div>
                <Navigation />
            </div>

            <div className="title" id="pageTitle"></div>
            <div>
                <VegetablesAndFruits />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

class Clock extends React.Component {
    render() {
        return (

            <div class="card border-0">
                <div class="card-body border-0">
                    <h1>Stock Available At ( {this.props.date.toLocaleTimeString()} )</h1>
                </div>
            </div>
        );
    }
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('pageTitle')
    );
}

setInterval(tick, 1000);

export default App;