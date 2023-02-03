import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

const PersonPage = ({ match }) => {
    const {
        params: { personId },
    } = match;

    return (
        <>
            Hello
        </>
    );
};

const HomePage = () => {


    return (
        <>
            <h5>
                <Link to={`/person/1`}>I's Page</Link>
            </h5>
        </>
    );
};

const NoPage = () => {
    return (
        <>
            <Router>
                <Route exact path="/" component={HomePage} />
                <Route path="/person/:personId" component={PersonPage} />
            </Router>
        </>
    );
};

export default NoPage;