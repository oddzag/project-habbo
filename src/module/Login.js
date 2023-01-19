import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import loginClose from '../store/login.js';

import top from '../img/login/top.png';
import bottom from '../img/login/bottom.png';
import textfield from '../img/login/textfield.png';
import ok from '../img/login/ok.png';
import ok_a from '../img/notice/ok_a.png';

const LoginCore = styled.div`
    width: 215px;
    height: 222px;
    position: absolute;
    left: 60%;
    top: 30%;`

const Top = styled.div`
    background-image: url(${top});
    width: 215px;
    height: 104px;
    margin-bottom: 26px;`

const Bottom = styled.div`
    background-image: url(${bottom});
    width: 215px;
    height: 220px;`

//I have NO idea why, but a minimum of 1px of padding-left prevents volter from being
//blurry when using {margin: 0 auto} or <center>. idk.. but it works
const Title = styled.div`
    font-family: Volter-Bold;
    color: #efefef;

    width: max-content;
    margin: 0 auto;
    padding: 12px 0 0 1px;`

const Signup = styled.div`
    font-family: Volter-Bold;
    width: max-content;
    left: 29px;
    top: 44px;
    position: absolute;
    line-height: 14px;
    color: #000;`

const Input = styled.div`
    width: 185px;
    height: 157px;
    margin: 7px 0 0 13px;
    padding-top: 11px`

const InputLabel = styled.div`
    width: max-content;
    margin: 0 auto;
    margin-bottom: 8px;`

const InputField = styled.input`
    font-family: Volter;
    text-align: center;
    width: 145px;
    height: 30px;
    margin: 2px 0 0 10px;
    border: 0;
    outline: 0;`

const Textfield = styled.div`
    background-image: url(${textfield});
    width: 165px;
    height: 34px;
    margin: 0 auto 8px auto;`

const OK = styled.div`
    background-image: url(${ok});
    width: 35px;
    height: 23px;
    margin: 0 auto;    
    
    :active {
        background-image: url(${ok_a})
    }`

function Login() {
    const dispatch = useDispatch();
    const { loginOpen } = useSelector((state) => state.login);

    return (
        <>
            { loginOpen ? (        
                <LoginCore>
                    <Top>
                        <Title>First time here?</Title>
                        <Link to="/register/age">
                            <Signup>
                                    Haven't got a Habbo yet?<br />
                                    <u>You can create one here</u>
                            </Signup>
                        </Link>
                    </Top>
                    <Bottom>
                        <Title>What's your Habbo called?</Title>
                        <Input>
                                <InputLabel>Name of your Habbo</InputLabel>
                                <Textfield><InputField /></Textfield>
                                <InputLabel>Password</InputLabel>
                                <Textfield><InputField /></Textfield>
                                <OK />
                        </Input>
                    </Bottom>
                </LoginCore> 
            ) : null}
        </>
    )
}

export default Login;