import { Button, Card, Row } from "antd";
import React, { useContext } from "react";
import firebase from "firebase/compat/app";
import { Context } from "../";

const Login = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
    };

    return (
        <Row justify="center" align="middle" className="content">
            <Card className="card">
                <Row justify="center">
                    <Button type="primary" id="btn" onClick={login}>
                        Log in with GOOGLE
                    </Button>
                </Row>
            </Card>
        </Row>
    );
};

export default Login;
