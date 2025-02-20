import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/store";
import { NAV_LINKS } from "./utils/constants";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar links={NAV_LINKS} />
        <Routes>
          <Route path="/" element={<Navigate to="/boxes" />} />
          <Route path="/boxes/new" element={<FormPage />} />
          <Route path="/boxes" element={<TablePage />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
