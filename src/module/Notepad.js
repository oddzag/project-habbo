import React, { useState, useEffect }  from 'react';
import DraggableCore from 'react-draggable';
import styled, { css, createGlobalStyle } from 'styled-components';
import ReactMarkdown from "react-markdown";

import '../css/notepad.css';

import notepad_bg from '../img/notepad.png';

import notes_dev from '../md/notes/dev.md';

const Notepad = styled.div`
    width: 539px;
    height: 524px;
    display: inline-block;
    background-image: url(${notepad_bg});`

const Volter = createGlobalStyle`
    @font-face {
        font-family: 'Volter';
        src: local('Volter'), url(./fonts/Volter.ttf) format('truetype');
    }`

const VolterBold = createGlobalStyle`
    @font-face {
        font-family: 'Volter-Bold';
        src: local('Volter-Bold'), url(../fonts/Volter-Bold.ttf) format('truetype');
    }`

const Content = styled.div`
    margin: 29px 30px 30px 32px;`

const Title = styled.h1`
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size: 18px;`

const Text = styled.p`
    font-family: Volter;
    font-size: 9px;
    color: #330;  
    padding: 0; 
    margin: 0; `


function Notes() {

    let [notes, setNotes] = React.useState({ md: "" });

    useEffect(() => {
        fetch(notes_dev)
        .then((res) => res.text())
        .then((md) => {
          setNotes({ md });
        });
    }, []);

    return (
        <DraggableCore defaultPosition={{x: 800, y: 100}}>
            <Notepad>
                <Content>
                    <ReactMarkdown children={notes.md}/>
                </Content>
            </Notepad>
        </DraggableCore>
    )
}

export default Notes;



