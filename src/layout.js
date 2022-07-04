import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import ConsumptionAlert from "./consumption-alert";

const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/push-notification" component={App} />
                    <Route exact path="/consumption-alert" component={ConsumptionAlert} />
                    <Route>
                        <h1>Not found!</h1>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Layout;