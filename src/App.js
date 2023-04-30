import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { Layout } from "antd";
import { useState } from "react";

function App() {
    const [auth, setAuth] = useState(false);
    return (
        <Layout>
            <BrowserRouter>
                <Navbar auth={auth} setAuth={setAuth} />
                <Layout.Content>
                    <AppRouter auth={auth} />
                </Layout.Content>
            </BrowserRouter>
        </Layout>
    );
}

export default App;
