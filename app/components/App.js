import React, { PropTypes } from 'react';
import { main } from '../styles/main.scss';


const App = () =>
    <div className={main}>
        <h2>adyax<span>.</span></h2>
        <h5>a better experience</h5>
        <h1>Front-End Developer<span>.</span></h1>
        <h3>
            Adyax's core values take top priority: we care for our client,
            and we care for our people. Staff and clients work in partnership
            with consistent, transparent communication.
        </h3>
        <div className="yellow-gradient">

        </div>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
