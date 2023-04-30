import { Button, Row } from "antd";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";
import TextArea from "antd/es/input/TextArea";

const Chat = () => {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState("");

    const sendMessage = () => {
        console.log(value);
    };

    return (
        <Row justify="center" align="middle" className="content">
            <div className="message"></div>
            <TextArea
                rows={2}
                value={value}
                style={{ width: "70%", resize: "none" }}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button
                type="primary"
                style={{
                    background: "rgb(98, 181, 181)",
                    fontSize: "30px",
                    height: "52px",
                    marginLeft: 10,
                }}
                onClick={sendMessage}
            >
                Send
            </Button>
        </Row>
    );
};

export default Chat;
