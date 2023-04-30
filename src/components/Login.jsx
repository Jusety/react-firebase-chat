import { Button, Card, Row } from "antd";
import React from "react";

const Login = () => {
    return (
        <Row justify="center" align="middle" className="content">
            <Card className="card">
                <Row justify="center" style={{ height: 160 }}>
                    <Button type="primary" id="btn">
                        Log in with GOOGLE
                    </Button>
                </Row>
            </Card>
        </Row>
    );
};

export default Login;
