import React from 'react';
import {
    Link
  } from "react-router-dom";

const Home = () => {
    
    return (
        <div>
            <h2>Browsers</h2>
            <ul>
                <li>
                    <Link to="/chrome">Chrome</Link>
                </li>
                <li>
                    <Link to="/firefox">Firefox</Link>
                </li>
                <li>
                    <Link to="/opera">Opera</Link>
                </li>
                <li>
                    <Link to="/safari">Safari</Link>
                </li>
            </ul>
            <h2>Ecommerce</h2>
            <ul>
                <li>
                    <Link to="/shopify">Shopify</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;