import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import { privateRoutes, publicRoutes } from "../Routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/constants";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../";
import { Row } from "antd";
import Loader from "./Loader";

const AppRouter = () => {
    const { auth } = useContext(Context);
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return (
            <h1>
                <Row justify="center" align="middle" className="content">
                    <Loader />
                </Row>
            </h1>
        );
    }
    if (error) {
        return (
            <h1>
                <Row justify="center" align="middle" className="content">
                    Error:{error}
                </Row>
            </h1>
        );
    }

    return (
        <div>
            {user ? (
                <Routes>
                    {privateRoutes.map((route) => (
                        <Route
                            path={route.path}
                            key={route.path}
                            element={route.element}
                        />
                    ))}
                    <Route
                        path="/*"
                        element={<Navigate to={CHAT_ROUTE} replace />}
                    />
                </Routes>
            ) : (
                <Routes>
                    {publicRoutes.map((route) => (
                        <Route
                            path={route.path}
                            key={route.path}
                            element={route.element}
                        />
                    ))}
                    <Route
                        path="/*"
                        element={<Navigate to={LOGIN_ROUTE} replace />}
                    />
                </Routes>
            )}
        </div>
    );
};

export default AppRouter;
