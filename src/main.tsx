import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { App} from "App";
import "bootstrap/dist/css/bootstrap.css";
// @ts-ignore
import ElectronicAppliance from "./pages/ElectronicAppliance.jsx";
// @ts-ignore
import Navbar from "./component/Navbar/Navbar";
// @ts-ignore
import Grocery from "./pages/Grocery.jsx";
// @ts-ignore
import Doctor from "./pages/Doctor.jsx";
// @ts-ignore
import Plumber from "./pages/Plumber.jsx";
// @ts-ignore
import Parlour from "./pages/Parlour.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/electronicAppliance" element={<ElectronicAppliance />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/parlour" element={<Parlour />} />
        <Route path="plumber" element={<Plumber />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
