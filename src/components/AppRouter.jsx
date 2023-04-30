import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { privateRoutes, publicRoutes } from "../Routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/constants";

const AppRouter = () => {
    const user = false;
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
