import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { stickyClose, stickyBG } from '../store/sticky.js';
import DraggableCore from 'react-draggable';

import bin from '../img/sticky/bin.png';
import exit from '../img/sticky/exit.png';

import bg_b from '../img/sticky/bg_b.png';
import bg_p from '../img/sticky/bg_p.png';
import bg_g from '../img/sticky/bg_g.png';
import bg_y from '../img/sticky/bg_y.png';

import button_b from '../img/sticky/button_b.png';
import button_p from '../img/sticky/button_p.png';
import button_g from '../img/sticky/button_g.png';
import button_y from '../img/sticky/button_y.png';

const StickyCore = styled.div`
    width: 185px;
    height: 178px;
    position: fixed;`

const BG = css`
    background-repeat: no-repeat;
    width: 185px;
    height: 178px;`

const BGB = styled.div` background-image: url(${bg_b}); ${BG} `
const BGP = styled.div` background-image: url(${bg_p}); ${BG} `
const BGG = styled.div` background-image: url(${bg_g}); ${BG} `
const BGY = styled.div` background-image: url(${bg_y}); ${BG} `

const Text = styled.p`
    margin: 11px 6px 19px 6px;`

const Head = styled.div`
    width: 183px;
    height: 19px;
    padding-top: 5px;`

const ButtonBG = css`
    width: 9px;
    height: 9px;
    display: inline-block;
    margin-right: 3px;`

const ButtonB = styled.div` background-image: url(${button_b}); ${ButtonBG}`
const ButtonP = styled.div` background-image: url(${button_p}); ${ButtonBG}`
const ButtonG = styled.div` background-image: url(${button_g}); ${ButtonBG}`
const ButtonY = styled.div` background-image: url(${button_y}); ${ButtonBG}`

const Bin = styled.div`
    background-image: url(${bin});
    width: 9px;
    height: 10px;
    display: inline-block;
    margin: 0 8px 0 8px;`

const Exit = styled.div`
    background-image: url(${exit});
    width: 10px;
    height: 10px;
    float: right;
    margin: 0 5px 0 0;`

function Sticky(props) {
    const message = props.message;
    const { isOpen, bg } = useSelector((state) => state.sticky);
    
    return (
        <>
        { isOpen ? (
            <DraggableCore defaultPosition={{x: 600, y: 200}}>
                <StickyCore>
                    { (bg === 'blue') ? (<BGB><Content message={message}/></BGB>): null}
                    { (bg === 'purple') ? (<BGP><Content message={message}/></BGP>): null}
                    { (bg === 'green') ? (<BGG><Content message={message}/></BGG>): null}
                    { (bg === 'yellow') ? (<BGY><Content message={message}/></BGY>): null}
                </StickyCore>
            </DraggableCore>
        ) : null}
    </>
    )
}

function Content(props) {
    const dispatch = useDispatch();
    const { isOpen } = useSelector((state) => state.sticky);

    const exit = (e) => {
        e.preventDefault();
        dispatch(stickyClose(!isOpen));
    };

    const setBG = (color) => {
        dispatch(stickyBG(color));
    }

    return (
        <>
            <Head>
                <Bin onClick={exit}/>
                <ButtonB onClick={() => {setBG('blue')}}/>
                <ButtonP onClick={() => {setBG('purple')}}/>
                <ButtonG onClick={() => {setBG('green')}}/>
                <ButtonY onClick={() => {setBG('yellow')}}/>
                <Exit onClick={exit}/>
            </Head>
            <Text>
                {props.message}
            </Text>
        </>
    )
}

export default Sticky;

//TO-DO
//1.