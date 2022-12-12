import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<CreateEmployee />} />
                    <Route
                        path="/createEmployee"
                        element={<CreateEmployee />}
                    />
                    <Route
                        path="/employeesList"
                        element={<CurrentEmployees />}
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
