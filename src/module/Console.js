import React,{ useState }  from 'react';
import DraggableCore from 'react-draggable';
import styled, { css } from 'styled-components';
import { consoleClose, buttonSet } from '../store/console.js';
import { useDispatch, useSelector } from 'react-redux';

import bg from '../img/console/bg.png';
import exit from '../img/console/exit.png';
import myInfo from '../img/console/myinfo.png';
import friends from '../img/console/friends.png';
import find from '../img/console/find.png';
import help from '../img/console/help.png';

import myInfo_active from '../img/console/myinfo_active.png';
import friends_active from '../img/console/friends_active.png';
import find_active from '../img/console/find_active.png';
import help_active from '../img/console/help_active.png';

import head from '../img/ui/head.png';
import divider from '../img/console/divider.png';
import scrollbar from '../img/console/scrollbar.png';

const ConsoleCore = styled.div`
    background-image: url(${bg});
    width: 256px;
    height: 297px;
    position: absolute;`

const Title = styled.div`
    width: max-content;
    margin: 0 auto;

    font-size: 9px;
    font-family: Volter-Bold;
    color: #996600;
    top: 10px;
    position: relative;`
    
const Exit = styled.div`
    background-image: url(${exit});
    width: 11px;
    height: 11px;
    position: absolute;
    top: 7px;
    right: 17px;`

const Content = styled.div`
    width: 215px;
    height: 193px;
    margin: 21px 0 0 19px;
    color: #EEE;`

const Button = styled.div`
    width: 47px;
    height: 48px;
    display: inline-block;

    ${props => props.myInfo && css`background-image: url(${myInfo});`};
    ${props => props.friends && css`background-image: url(${friends});`};
    ${props => props.find && css`background-image: url(${find});`};
    ${props => props.help && css`background-image: url(${help});`};


    ${props => (props.myInfo & (props.buttonActive === "myInfo")) && css`background-image: url(${myInfo_active});`};
    ${props => (props.friends & (props.buttonActive === "friends")) && css`background-image: url(${friends_active});`};
    ${props => (props.find & (props.buttonActive === "find")) && css`background-image: url(${find_active});`};
    ${props => (props.help & (props.buttonActive === "help")) && css`background-image: url(${help_active});`};`

const ButtonWrap = styled.div`
    width: max-content;
    position: absolute;
    right: 2px;
    left: 0;
    bottom: 2px;
    margin: auto;`

// Content declarations

const Divider = styled.div`
    background-image: url(${divider});
    width: 211px;
    height: 1px;
    margin: ${props => props.margin || "0"};
    
    ${props => props.friends && css`
        width: 198px; 
        margin: 0 0 0 2px;`}`

function Console() {
    const { consoleOpen, buttonActive } = useSelector((state) => state.console);
    
    return (
        <>
        { consoleOpen ? (
        <DraggableCore defaultPosition={{x: 500, y: 200}}>
            <ConsoleCore>
                <Title>Habbo Console</Title>
                <Exit onClick={() => {useDispatch(consoleClose(!consoleOpen))}}/>
                <Content>
                    { buttonActive === 'myInfo' ? <MyInfo /> : null}
                    { buttonActive === 'friends' ? <Friends /> : null}
                    { buttonActive === 'find' ? <Find /> : null}
                    { buttonActive === 'help' ? <Help /> : null}
                </Content>

                <ButtonWrap>
                    <Button onClick={() => {dispatch(buttonSet('myInfo'))}} myInfo buttonActive={buttonActive}/>
                    <Button onClick={() => {dispatch(buttonSet('friends'))}} friends buttonActive={buttonActive}/>
                    <Button onClick={() => {dispatch(buttonSet('find'))}} find buttonActive={buttonActive}/>
                    <Button onClick={() => {dispatch(buttonSet('help'))}} help buttonActive={buttonActive}/>
                </ButtonWrap>
            </ConsoleCore>
        </DraggableCore>) : null }
        </>
    )
}

const Head = styled.div`
    background-image: url(${head});
    width: 26px;
    height: 33px;
    position: absolute;
    margin: 34px 0 0 18px;
`
const Name = styled.div`
    font-family: Volter-Bold;
    width: 135px;
    height: 18px;
    position: absolute;
    margin: 29px 0 0 68px
`
const Motto = styled.input`
    font-family: Volter;
    font-size: 9px;
    color: #EEE;
    line-height: 16px; 
    background: transparent;
    border-style: solid;
    border-width: 1px;
    border-color: #EEE;
    outline: 0;
    margin: 46px 0 0 64px;
    max-length: 10;
`
const Inbox = styled.div`
    width: 102px;
    height: max-content;
    margin: 0 0 7px 68px;
`

function MyInfo () {

    const newMessages = 1;

    return (
        <>
            <Head />
            <Name>oddzag</Name>
            <Motto></Motto>
            <Divider margin="33px 0 31px 2px"/>
            <Inbox onClick={() => {if(newMessages > 0) console.log('hello')}}>
                <u>0 New Message(s)</u>
            </Inbox>
            <Inbox>
                <u>0 Friend Request(s)</u>
            </Inbox>
        </>
    )
}

const Scrollbar = styled.div`
    background-image: url(${scrollbar});
    width: 13px;
    height: 160px;
    margin-top: 2px;
    float: right;`

const FriendBlock = styled.div`
    width: 199px;
    height: 37px;
    margin: 3px 0 1px 1px;
    border-style: solid;
    border-color: #f0f0f0;
    border-width: 1px;`

function Friends () {
    return (
        <>
            <Scrollbar />
            <FriendBlock />
            <Divider friends/>
        </>
    )
}

function Find () {
    return (
        <>
            find
        </>
    )
}

function Help () {
    return (
        <>
            help
        </>
    )
}


export default Console;



