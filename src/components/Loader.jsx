import { Spin } from "antd";
import React from "react";

const Loader = () => {
    return (
        <div className="example">
            <Spin tip="Loading..." size="large" style={{ fontSize: 20 }} />
        </div>
    );
};

export default Loader;
