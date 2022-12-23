import store from './state/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import HotelView from './HotelView.js';
function Main() {
    return (
        <>
            <Provider store={store}>
                <Routes>
                    <Route path="/" index element={<HotelView />}></Route>
                </Routes>
            </Provider>
        </>
    )
}

export default Main;