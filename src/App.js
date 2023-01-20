import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";
import { lazy, Suspense } from "react";

const CurrentEmployees = lazy(() => import("./pages/CurrentEmployees"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header logo={logo} />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route
                            path="/"
                            element={<CreateEmployee logo={logo} />}
                        />
                        <Route
                            path="/employeesList"
                            element={<CurrentEmployees />}
                        />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Suspense>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
