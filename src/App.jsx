import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx"
import Home from "./pages/Home.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import WatchPage from "./pages/watch/WatchPage.jsx";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>

                
                </Route>

                <Route
    path="/watch/:videoId"
    element={<WatchPage />}
/>

                <Route
                    path="/register"
                    element={<Register />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />

              </Routes>
        </BrowserRouter>
    );
}
export default App
