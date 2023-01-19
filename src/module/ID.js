import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { idClose } from '../store/id.js';
import Draggable from 'react-draggable';

import top from '../img/boxes/default/top.png';
import mid from '../img/boxes/default/mid.png';
import bottom from '../img/boxes/default/bottom.png';
import exit from '../img/boxes/default/exit.png';
import details from '../img/ui/id/details.png';

const IDCore = styled.div`
    width: max-content;
    height: 405px;
    position: absolute;`

const Top = styled.div`
    background-image: url(${top});
    width: 307px;
    height: 35px;
    position: relative;`

const Mid = styled.div`
    background-image: url(${mid});
    width: 307px;
    min-height: 306px;
    padding-left: 10px;
    position: relative;`

const Bottom = styled.div`
    background-image: url(${bottom});
    width: 307px;
    height: 20px;`

const Title = styled.div`
    width: max-content;
    margin: 0 auto;

    font-size: 9px;
    font-family: Volter-Bold;
    color: #efefef;
    top: 9px;
    left: -1px;
    position: relative;`

const Exit = styled.div`
    background-image: url(${exit});
    width: 11px;
    height: 11px;
    position: absolute;
    top: 7px;
    right: 16px;`

const Content = styled.div`
    width: 284px;`

const Details = styled.div`
    background-image: url(${details});
    width: 266px;
    height: 84px;
    margin: 0 auto;`

const Username = styled.div`
    font-family: Volter-Bold;
    font-size: 18px;
    line-height: 14px;

    width: max-content;
    margin: 0 auto;
    padding: 15px 0 0 0;`

const Mission = styled.div`
    font-family: Volter-Bold;
    font-size: 9px;
    line-height: 7px;

    width: max-content;
    margin: 0 auto;
    padding: 14px 0 0 0;`

const Motto = styled.div`
    font-family: Volter;
    font-size: 9px;

    max-width: 241px;
    margin: 10px 0 0 14px;`

const InputField = styled.input`
    font-family: Volter;
    font-size: 9px;
    text-align: left;
    width: 240px;
    height: 10px;
    margin: 0 0 0 0;
    border: 0;
    outline: 0;`

function ID() {
    return (
        <>
            <Draggable defaultPosition={{x: 300, y: 200}}>
                <IDCore>
                    <Top>
                        <Title>
                            Habbo Details
                        </Title>
                        <Exit onClick={() => {dispatch(idClose(!idOpen))}}/>
                    </Top>
                    
                    <Mid>
                        <Content>
                            <Details>
                                <Username>oddzag</Username>
                                <Mission>Your Mission:</Mission>
                                <Motto><InputField></InputField></Motto>
                            </Details>
                        </Content>
                    </Mid>
                    <Bottom />

                </IDCore>
            </Draggable>
        </>
    )
}

export default ID;