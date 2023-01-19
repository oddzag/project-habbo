//Package imports
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

//Store imports
import { termsCheck, linkSet } from '../store/register.js';
import { noticeSet, noticeHeadingSet, noticeMessageSet } from '../store/notice.js';

//Module imports
import Imager from './Imager.js';

//Image imports
import top from '../img/boxes/default/top.png';
import mid from '../img/boxes/default/mid.png';
import bottom_age from '../img/register/bottom_age.png';
import bottom_reg from '../img/register/bottom_reg.png';

import greeter from '../img/register/greeter.png';

import cancel from '../img/register/cancel.png';
import cancel_a from '../img/register/cancel_a.png';
import over from '../img/register/over.png';
import under from '../img/register/under.png';
import over_a from '../img/register/over_a.png';
import under_a from '../img/register/under_a.png';
import back from '../img/register/back.png';
import back_a from '../img/register/back_a.png';
import next from '../img/register/next.png';
import next_a from '../img/register/next_a.png';

import checkbox from '../img/register/checkbox.png';
import checkbox_a from '../img/register/checkbox_a.png';

import imager_top from '../img/register/imager_top.png';
import namebox from '../img/register/namebox.png';


const RegisterCore = styled.div`
    width: max-content;
    height: 405px;
    position: absolute;
    left: 60%;
    top: 30%;`

const Top = styled.div`
    background-image: url(${top});
    width: 307px;
    height: 35px;
    position: relative;`

const Mid = styled.div`
    background-image: url(${mid});
    width: 307px;
    min-height: ${props => props.height || "306px"};
    position: relative;`

const Bottom = styled.div`
    background-image: url(${bottom_reg});
    width: 307px;
    height: 44px;
    
    ${props => props.age && css`
        background-image: url(${bottom_age});
        height: 68px;`
    }`

const Title = styled.div`
    width: max-content;
    margin: 0 auto;

    font-size: 9px;
    font-family: Volter-Bold;
    color: #efefef;
    top: 9px;
    left: -1px;
    position: relative;`

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 13px 29px 13px 23px;`

export function Register() {

    return (
        <>
            {/* placeholder */}
        </>
        )
    }


const Greeter = styled.div`
    background-image: url(${greeter});
    width: 247px;
    height: 141px;
    margin-bottom: 32px;`

const Bold = styled.span`font-family: Volter-Bold;`

const Cancel = styled.div`
    background-image: url(${cancel});
    width: 59px;
    height: 18px;
    margin: 12px 0 0 11px;
    position: absolute;
    
    :active {
        background-image: url(${cancel_a});
    }`

const Over = styled.div`
    background-image: url(${over});
    width: 113px;
    height: 18px;
    right: 0;
    margin: 36px 14px 0 11px;
    position: absolute;
    
    :active {
        background-image: url(${over_a});
    }`

const Under = styled.div`
    background-image: url(${under});
    width: 160px;
    height: 18px;
    right: 0;
    margin: 12px 14px 0 11px;
    position: absolute;

    :active {
        background-image: url(${under_a});
    }`

export function Age() {
    return (
        <>
            <RegisterCore>
                <Top>
                    <Title>
                        Habbo Details
                    </Title>
                </Top>

                <Mid>
                    <Content>
                        <Greeter />
                        <Bold>Create Your Own Habbo</Bold>
                        <br />
                        Now the fun begins! All you need to do is register and you're
                        ready to start. It won't take long!<br/>
                        You can change everything except your name and date of birth
                        later. Come on!
                    </Content>
                </Mid>
                <Bottom age>
                    <Link to="/">
                        <Cancel />
                        <Under />
                    </Link>
                    <Link to="/register/terms">
                        <Over />
                    </Link>
                </Bottom>
            </RegisterCore>
        </>
    )
}

const TermsBox = styled.div`
    width: 249px;
    max-height: 165px;
    overflow: scroll;
    border: 1px #000;
    border-style: solid;
    padding: 5px 19px 4px 6px;
    margin: 13px 0 7px 0;`

const Back = styled.div`
    background-image: url(${back});
    width: 49px;
    height: 18px;
    position: absolute;
    margin: 14px 0 0 11px;
    
    :active {
        background-image: url(${back_a});
    }`

const Next = styled.div`
    background-image: url(${next});
    width: 48px;
    height: 18px;
    right: 0;
    position: absolute;
    margin: 15px 14px 0 0;
    
    :active {
        background-image: url(${next_a});
    }`

const Documents = styled.ul`
    list-style-type: none;
    text-decoration: underline;
    color: #990000;
    line-height: 13px;

    a:visited {
        color: #990000;
    }`

const Checkbox = styled.button`
    background-image: url(${checkbox});
    background-repeat: no-repeat;
    width: 12px;
    height: 15px;
    border: 0;
    float: left;
    margin-right: 9px;

    
    ${props => (props.checked) && css`
        background-image: url(${checkbox_a});
        width: 12px;
        height: 12px;
        border: 0;
        padding: 0;`
    };`

export function Terms() {
    const dispatch = useDispatch();
    const { termsChecked, nextLink } = useSelector((state) => state.register);
    const { noticeOpen } = useSelector((state) => state.notice);

    return (
        <>
            <RegisterCore>
                <Top>
                    <Title>
                        Habbo Details
                    </Title>
                </Top>

                <Mid height="338px">
                    <Content>
                        Read through the below text carefully. You
                        must agree to the following terms before entering Habbo Hotel.

                        <TermsBox>
                            Welcome to Habbo Hotel. If you are under 16, please check the 
                            Terms and Conditions with your parents/guardian before you agree 
                            to them. Get them to explain anything that you don't understand. 
                            <br />
                            In order to use the service you have to give valid information 
                            about yourself when registering. Please email us if any of your 
                            user information changes. 
                            <br />
                            As a user of Habbo Hotel - 
                            www.habbohotel.co.uk, you have to behave according to the Habbo 
                            Way (hotel rules) and the Terms and Conditions. Click the links 
                            below to read about them. 
                            <br />
                            Never give your password or email
                            address to anyone. If you do, your Habbo may get stolen. 
                            <br />
                            Registering with the hotel, making your own empty room and 
                            chatting is free of charge. For a small fee you can decorate 
                            your room with virtual furniture, play games and join the Habbo 
                            Club. If you wish to buy, you will need your parent's permission 
                            to do so.
                        </TermsBox>
                        Full version of the documents:
                        <Documents>
                            <li><a href="https://habbo.gs/2003/help/safety" target="_blank">Hotel Rules</a></li>
                            <li><a href="https://habbo.gs/2003/help/safety/terms" target="_blank">Terms and Conditions</a></li>
                            <li><a href="https://habbo.gs/2003/help/safety/privacypledge" target="_blank">Privacy Pledge</a></li>
                        </Documents>
                        <Checkbox checked={termsChecked} onClick={() => {
                                        dispatch(termsCheck(!termsChecked));
                            }}/>
                        Yes, I have read the Habbo Terms of Service and I accept them
                    </Content>
                </Mid>
                <Bottom>
                    <Link to="/register/age">
                        <Back />
                    </Link>
                    <Link to={termsChecked ? "/register/model" : ""}
                        onClick={() => { 
                            if (!termsChecked)
                                dispatch(noticeSet(!noticeOpen)); 
                            else {}

                            dispatch(noticeHeadingSet("Please check these details")); 
                            dispatch(noticeMessageSet("You have to agree to the terms of service (tick the box)."));}}>
                        <Next />
                    </Link>
                </Bottom>
            </RegisterCore>
        </>
    )
}

const ModelTop = styled.div`
    background-image: url(${imager_top});
    width: 266px;
    height: 84px;
    position: relative;
    margin-left: 18px;`

const ModelTopText = styled.div`
    width: 240px;
    margin: 0 auto;
    padding: 8px 5px 0 5px;`

const Namebox = styled.div`
    background-image: url(${namebox});
    width: 194px;
    height: 34px;
    position: absolute;
    bottom: 5px;
    margin-left: 36px;`

const NameboxInput = styled.input`
    font-family: Volter;
    font-size: 18px;
    line-height: 16px; 
    background: transparent;
    border: 0;
    outline: 0;
    max-length: 10;
    margin: 7px 0 0 10px;`

export function Model() {
    return (
        <RegisterCore>
            <Top>
                <Title>
                    Habbo Details
                </Title>
            </Top>

            <Mid height="338px">
                <ModelTop>
                    <ModelTopText>
                    Now it's time to make your own Habbo character! To make our own Habbo,
                    please start by choosing your Habbo name.
                    </ModelTopText>
                    <Namebox>
                        <NameboxInput />
                    </Namebox>
                </ModelTop>
                <Imager/>
            </Mid>
            <Bottom>
                <Link to="/register/terms">
                    <Back />
                </Link>
                <Next />
            </Bottom>
        </RegisterCore>
    )
}