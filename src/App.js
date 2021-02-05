import React from "react";
import { Switch, Route } from "react-router-dom"

import Layout from "./hoc/Layout/Layout";
import HomePage from "./Components/HomePage/HomePage";


function App() {
    return (
        <Layout >
            <Switch>
                <Route path="/" component={HomePage} /> 
            </Switch>
            a7aaaaaa
        </Layout>
    );
}

export default App;