import React, { useEffect }  from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import DraggableCore from 'react-draggable';
import ReactMarkdown from "react-markdown";

import { navSet } from '../store/archive.js';

import bg from '../img/archive/bg.png';
import nav_b from '../img/archive/nav_b.png';
import nav_b_a from '../img/archive/nav_b_a.png';

//Home
import logo_home from '../img/archive/logo_home.png';
import scientists from '../img/archive/scientists.gif';
import construction from '../img/archive/construction.gif'

//Dev notes
import notes_dev from '../md/notes/dev.md';
import dev_notes from '../img/archive/dev_notes.gif';
import { NonceProvider } from 'react-select';

const ArchiveCore = styled.div`
    background-image: url(${bg});
    width: 597px;
    height: 446px;
    position: absolute;
`

const Content = styled.div`
    width: 460px;
    height: 400px;
    overflow: scroll;
    margin: 35px 0 0 7px;
    position: absolute;
    padding: 0 10px;
`

const VolterBold = styled.span`
    font-family: Volter-Bold;
`

const NavWrap = styled.div`
    width: 107px;
    height: 386px;
    margin: 40px 13px 0 0;
    right: 0;
    position: absolute;
`

const NavButton = styled.div`
    background-image: url(${nav_b});
    width: 107px;
    height: 21px;
    
    ${props => (props.active) && css`
        background-image: url(${nav_b_a});
        width: 107px;
        height: 21px;
    `};
`

const NavText = styled.div`
    font-family: Volter-Bold;
    margin: 7px 0 0 6px;
    position: absolute;
`

export default function Archive() {
    const dispatch = useDispatch();
    const { home, devnotes, comments } = useSelector((state) => state.archive.navFlags);

    return (
        <DraggableCore defaultPosition={{x: 200, y: 200}}>
            <ArchiveCore>
                <Content>
                    <Home />
                    <DevNotes />
                    <Comments />
                </Content>
                <NavWrap>
                    <NavButton active={home} onClick={() => {dispatch(navSet("home"))}}>
                        <NavText>Archive</NavText>
                    </NavButton>
                    <NavButton active={devnotes} onClick={() => {dispatch(navSet("devnotes"))}}>
                        <NavText>Dev Notes</NavText>
                    </NavButton>
                    <NavButton active={comments} onClick={() => {dispatch(navSet("comments"))}}>
                        <NavText>Comments</NavText>
                    </NavButton>
                    <a href="https://github.com/oddzag/project-habbo" target="_blank" style={{color: '#000'}}>
                        <NavButton>
                            <NavText>Github</NavText>
                        </NavButton>
                    </a>
                </NavWrap>
            </ArchiveCore>
        </DraggableCore>
    )
}

const LogoHome = styled.div`
    background-image: url(${logo_home});
    width: 257px;
    height: 74px;
    margin: 0 auto;
`

const Scientists = styled.div`
    background-image: url(${scientists});
    width: 131px;
    height: 120px;
    float: left;
    margin: 30px 10px 10px 0;
`
const HomeContent = styled.div`
    width: 95%;
    height: max-content;
    margin: 30px 0 0 0;
`

const HomeTopLeft = styled.div`
    width: max-content;`

const Construction = styled.div`
    background-image: url(${construction});
    width: 113px;
    height: 100px;
    float: right;`

function Home() {
    const { home } = useSelector((state) => state.archive.navFlags);

    return (
        <>
            { home ? 
            (
                <>
                    <LogoHome />
                    <Scientists />
                    <HomeContent>
                        Hello and welcome to project Habbo! What you see here is the result of the devoted effort of the sites 
                        proprietor, <VolterBold>oddzag</VolterBold>. If you'd like to read more on the personal history of oddzag, click here.
                        <br /><br />
                        This site serves many intended purposes. For one, Shockwave is dead. An entire internet run on Shockwave
                        is slowly disappearing, and Habbo is not immune. There are many other sites acting as an archive for old 
                        reverse engineering files, and this will be one of them.
                        <br /><br />
                        Another intended purpose is to recreate the old game in a strictly web-based format so everyone can enjoy it.
                        Web is the past, present and future of the internet
                        <br /><br />
                        <Construction />
                        In the mean time, please excuse the constant state of the site. I'm a "developer", an amateur at best. I'm learning
                        most of the things I implement as I implement them. 
                        <br /><br />
                        If you'd like to get involved for whatever reason, check out some of the links on the side. Otherwise feel free 
                        to explore the site, pilfer the archive files or just say hi.
                    </HomeContent>

                </>
            ) : null }
        </>
    )
}

const LogoNotes = styled.div`
    background-image: url(${dev_notes});
    width: 164px;
    height: 24px;
    margin: 10px 0 20px -10px;`

function DevNotes() {
    const { devnotes } = useSelector((state) => state.archive.navFlags);
    let [notes, setNotes] = React.useState({ md: "" });

    useEffect(() => {
        fetch(notes_dev)
        .then((res) => res.text())
        .then((md) => {
          setNotes({ md });
        });
    }, []);

    return (
        <>
            { devnotes ? (
                <>
                    <LogoNotes />
                    <ReactMarkdown children={notes.md}/>
                </> ) : null}
        </>
    )
}

function Comments() {
    const { comments } = useSelector((state) => state.archive.navFlags);

    return (
        <>
            { comments ? "comments" : null}
        </>
    )
}