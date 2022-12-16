import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import Sticky from './Sticky.js';
import HotelView from './HotelView.js';

function Main() {
    return (
        <>

            <Routes>
                <Route path="/" index element={<HotelView />}></Route>

            </Routes>
            
            <Sticky message={
                <>
                    Hello, this is a work in progress. Things may or may not work depending on what I'm currently working on.
                    <br /><br />
                    For a more complete project, check out the <a href="https://habbo.gs/2003" target="_blank" rel="noreferrer">2003 hotel.</a>
                    <br /><br />
                    (ps. this is draggable :D )
                    <br /><br />
                    <span style={{float: 'right'}}>- oddzag</span>
                </>
            }/>
        </>
    )
}

export default Main;