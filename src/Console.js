import React, { useState }  from 'react';
import DraggableCore from 'react-draggable';

function Console({showConsole, setShowConsole}) {

    const closeConsole = () => {  
        if(showConsole) setShowConsole(false);
        else setShowConsole(true);
    };

    const [isActive, setActive] = useState(false);
    const activeButton = () => {
        setActive(!isActive);
    };

    return (
        <DraggableCore defaultPosition={{x: 500, y: 200}}>
            <div id="habbo_console">
                <div id="console_title">Habbo Console</div>
                <div id="console_exit" onClick={closeConsole}></div>

                <div id="console_buttons">
                    <div id="console_button_myinfo"></div>
                    <div id="console_button_friends"></div>
                    <div id="console_button_find"></div>
                    <div id="console_button_help"></div>
                </div>
            </div>
        </DraggableCore>
    )
}

export default Console;



