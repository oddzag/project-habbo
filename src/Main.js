import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import styled, { css, createGlobalStyle } from 'styled-components';

import Notice from './module/Notice.js';
import Login from './module/Login.js';
import { Register, Age, Terms, Model } from './module/Register.js';

import UI from './module/ui/HV.js';

import Archive from './module/Archive.js';

import logo from './img/corner_logo.png';
import view from './img/views/uk.png';

const Logo = styled.div`
    background-image: url(${logo});
    width: 218px;
    height: 202px;
    top: 0;
    left: 0;
    position: fixed;`

const View = styled.div`
    background-image: url(${view});
    width: 1152px;
    height: 614px;
    position: fixed;
    bottom: 0;
    left: 0;
    margin-bottom: 59px;`

function Main() {

    return (
        <>
            <Logo />
            <View />
            <UI />
            <Archive />

            {/* going to need some sort of notice/message system soon */}
            <Notice />


            <Router>
                <Routes>
                    <Route path="/" index element={<Login />}></Route>
                    <Route path="/register/age" element={<Age />}></Route>
                        <Route path="/register/terms" element={<Terms />}></Route>
                        <Route path="/register/model" element={<Model />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default Main;