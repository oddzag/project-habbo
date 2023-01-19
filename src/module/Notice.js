import React  from 'react';
import Draggable from 'react-draggable';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { noticeSet } from '../store/notice.js';

import bg from '../img/notice/bg.png';
import exit from '../img/notice/exit.png';
import ok from '../img/notice/ok.png';
import ok_a from '../img/notice/ok_a.png';

const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 50%);
`

const NoticeCore = styled.div`
    background-image: url(${bg});
    width: 278px;
    height: 184px;`

const Exit = styled.div`
    background-image: url(${exit});
    width: 11px;
    height: 11px;
    position: absolute;
    top: 7px;
    right: 15px;`

const Heading = styled.div`
    font-family: Volter-Bold;
    width: max-content;
    margin: 0 auto;
    padding: 40px 1px 0 0;`

const Message = styled.div`
    width: 260px;
    padding:  15px 11px 0 11px;
    margin: 0 auto;`

const OK = styled.div`
    background-image: url(${ok});
    width: 35px;
    height: 23px;
    bottom: 0;
    position: absolute;
    margin: 0 0 20px 121px;
    
    :active {
        background-image: url(${ok_a})
    }`

function Notice(props) {
    const dispatch = useDispatch();
    const { noticeOpen, heading, message } = useSelector((state) => state.notice);

    return (
        <>
            { noticeOpen ?  (
            <>
                <Overlay>
                    <Draggable defaultPosition={{x: 800, y: 200}}>
                        <NoticeCore>
                            <Exit onClick={() => {dispatch(noticeSet(!noticeOpen))}}/>
                            <Heading>{`${heading}`}</Heading>
                            <Message>{`${message}`}</Message>
                            <OK onClick={() => {dispatch(noticeSet(!noticeOpen))}}/>
                        </NoticeCore>
                    </Draggable>
                </Overlay>
            </>) : null }
        </>)

}

export default Notice;