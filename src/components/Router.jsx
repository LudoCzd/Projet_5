import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Error from "../pages/Error";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={Home} />
        <Route path="/a-propos" element={About} />
        <Route path="/logement/:id" element={Logement} />
        <Route path="/*" element={Error} />
      </Route>
    </Routes>
  );
}
export default Router;
