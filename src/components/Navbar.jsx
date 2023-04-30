import { Layout, Menu } from "antd";
import React, { useContext } from "react";
import { Context } from "../";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <Layout.Header>
            <Menu
                selectable={false}
                className="menu"
                theme="dark"
                mode="horizontal"
                items={
                    user
                        ? [
                              { label: "Username", key: "name" },
                              {
                                  label: "Log out",
                                  key: "logout",
                                  onClick: async () => await auth.signOut(),
                              },
                          ]
                        : [
                              {
                                  label: "Log in",
                                  key: "login",
                              },
                          ]
                }
            />
        </Layout.Header>
    );
};

export default Navbar;
