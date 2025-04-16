import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import AdminLayout from "./Components/AdminLayout/AdminLayout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Users from "./Components/Users/Users";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="admin/users" element={<Users />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
