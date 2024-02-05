import React from 'react';
import { Link } from 'react-router-dom';

const IntroView = () => {
    return (
        <div>
            <h1>Intro</h1>
            <ul>
             <Link to={"/itunes"}> <li>Exercice ITunes </li> </Link>
            </ul>
        </div>
    );
};

export default IntroView;
