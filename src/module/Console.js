import React, { useState }  from 'react';
import DraggableCore from 'react-draggable';
import styled, { css } from 'styled-components';

import buttonMyInfo from '../img/console/button_myinfo.png';
import buttonFriends from '../img/console/button_friends.png';
import buttonFind from '../img/console/button_find.png';
import buttonHelp from '../img/console/button_help.png';

const ConsoleButton = styled.div`
width: 47px;
height: 48px;
display: inline-block;

${props => props.myInfo && css`background-image: url(${buttonMyInfo});`};
${props => props.friends && css`background-image: url(${buttonFriends});`};
${props => props.find && css`background-image: url(${buttonFind});`};
${props => props.help && css`background-image: url(${buttonHelp});`};`


function Console({showConsole, setShowConsole}) {

    const closeConsole = () => {  
        if(showConsole) setShowConsole(false);
        else setShowConsole(true);
    };

    

    return (
        <DraggableCore defaultPosition={{x: 500, y: 200}}>
            <div id="habbo_console">
                <div id="console_title">Habbo Console</div>
                <div id="console_exit" onClick={closeConsole}></div>

                <div id="console_buttons">
                    <ConsoleButton myInfo />
                    <ConsoleButton friends />
                    <ConsoleButton find />
                    <ConsoleButton help />
                </div>
            </div>
        </DraggableCore>
    )
}

export default Console;



