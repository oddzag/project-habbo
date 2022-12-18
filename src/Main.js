import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import HotelView from './HotelView.js';

import Sticky from './Sticky.js';

function Main() {
    return (
        <>

            <Routes>
                <Route path="/" index element={<HotelView />}></Route>

            </Routes>
        </>
    )
}

export default Main;