import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render () {
        return (
            <div className="jumbotron">
                <h1>Pluralsight administration</h1>
                <p>This is my home page. I am definitely going to enjoy React</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;

