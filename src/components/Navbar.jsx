import { Layout, Menu } from "antd";
import React from "react";

const Navbar = ({ auth, setAuth }) => {
    return (
        <Layout.Header>
            <Menu
                selectable={false}
                className="menu"
                theme="dark"
                mode="horizontal"
                items={
                    auth
                        ? [
                              { label: "Username", key: "name" },
                              {
                                  label: "Log out",
                                  key: "logout",
                                  onClick: () => {
                                      setAuth(false);
                                  },
                              },
                          ]
                        : [
                              {
                                  label: "Log in",
                                  key: "login",
                                  onClick: () => {
                                      setAuth(true);
                                  },
                              },
                          ]
                }
            />
        </Layout.Header>
    );
};

export default Navbar;
