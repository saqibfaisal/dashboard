import {
    BrowserRouter as Router, Route, Routes, 
  } from "react-router-dom";
import Signin from "../screen/sign";
import DashBoard from "../screen/dashboard"

function AppRoute() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Signin/>}/>
                <Route path="/dashboard/*" element={<DashBoard/>}/>
            </Routes>
        </Router>
    )
}
export default AppRoute