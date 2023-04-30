import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { Layout } from "antd";
import "./App.css";

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Navbar />
                <Layout.Content>
                    <AppRouter />
                </Layout.Content>
            </BrowserRouter>
        </Layout>
    );
}

export default App;
