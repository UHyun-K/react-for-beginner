import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Detail from "./routes/Detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/movie/:id" element={<Detail />}></Route>
                <Route
                    path={`${process.env.PUBLIC_URL}/`}
                    element={<Home />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
