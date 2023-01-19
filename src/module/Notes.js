import React, { useEffect }  from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import DraggableCore from 'react-draggable';
import ReactMarkdown from "react-markdown";

import '../css/notepad.css';

import notepad_bg from '../img/notepad/notepad.png';
import dev_notes from '../img/notepad/dev_notes.gif';

import notes_dev from '../md/notes/dev.md';

const Notepad = styled.div`
    background-image: url(${notepad_bg});
    width: 539px;
    height: 524px;
    position: absolute;
    display: inline-block;`

const DevNotes = styled.div`
    background-image: url(${dev_notes});
    width: 164px;
    height: 24px;
    margin: 30px 0 0 20px;`

const Content = styled.div`
    max-height: 440px;
    margin: 20px 30px 30px 32px; 
    overflow: scroll`

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

    const { notesOpen } = useSelector((state) => state.notes);
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
            { notesOpen ? (
                <DraggableCore defaultPosition={{x: 800, y: 100}}>
                    <Notepad>
                        <DevNotes/>
                        <Content>
                            <ReactMarkdown children={notes.md}/>
                        </Content>
                    </Notepad>
                </DraggableCore>
            ) : null}
        </>
    )
}

export default Notes;



