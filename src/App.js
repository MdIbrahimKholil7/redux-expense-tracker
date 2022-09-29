import { Route,Routes } from "react-router-dom";
import AllTransaction from "./components/AllTransaction";
import Balance from "./components/Balance";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Transactions from "./components/Transactions/Transactions";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allTransaction" element={<AllTransaction />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
