import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "@/views/layout";
import Login from "@/views/login";
import { StoreState } from '@/store/types';

interface RouteProps {
    token: string
}
class Router extends React.Component {
    render() {
        const { token } = this.props as RouteProps;
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route
                        path="/"
                        render={() => {
                            if (!token) {
                                return <Redirect to="/login" />;
                            } else {
                                return <Layout />;
                            }
                        }}
                    />
                </Switch>
            </HashRouter>
        );
    }
}

export default connect((state: StoreState) => {
    return {
        token: state.user.token
    }
})(Router);
