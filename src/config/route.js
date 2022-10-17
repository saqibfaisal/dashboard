import {
    BrowserRouter as Router, Route, Routes, 
  } from "react-router-dom";
import Signin from "../screen/sign";
import DashBoard from "../screen/dashboard"
import Screen from "../dashboard screen/screen";

function AppRoute() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Signin/>}/>
                <Route path="/dashboard/*" element={<DashBoard/>}/>
                <Route path="screen" element={<Screen/>}/>
            </Routes>
        </Router>
    )
}
export default AppRoute