import React, { useState }  from 'react';
import Dropdown from 'react-dropdown';
import Draggable from 'react-draggable';

import Sticky from './module/Sticky.js'; 
import Notes from './module/Notepad.js';

import ID from './module/ID.js';
import Console from './module/Console.js';
//import Purse from './Purse.js';
//import Navigator from './Navigator.js';
//import HC from './HC.js';
import Help from './module/Help.js';

function HotelView(props) {

    const [showID, setShowID] = useState(false);
    const [showConsole, setShowConsole] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const [showSticky, setShowSticky] = useState(true);

    //flips state to false to hide component
    const openID = () => {
        if(showID) setShowID(false);
        else setShowID(true);
    }

    const openConsole = () => {
        if(showConsole) setShowConsole(false);
        else setShowConsole(true);
    }

    const openHelp = () => { 
        if(showHelp) setShowHelp(false);
        else setShowHelp(true);
    }

    return (
        <>
        <div id="corner_logo"></div>
        <div id="hv_uk"></div>

        {/*this is where the component is rendered, but removed if setShow[...] flag is false */} 
        {showSticky ? <Sticky showSticky={showSticky} setShowSticky={setShowSticky} message={<WelcomeMessage />}/> : null}

        {showID ? <ID showID={showID} setShowID={setShowID}/> : null}
        {showConsole ? <Console showConsole={showConsole} setShowConsole={setShowConsole}/> : null}
        {showHelp ? <Help showHelp={showHelp} setShowHelp={setShowHelp}/> : null}
        <Notes />
        <div id="hv_ui_bg">
            <div id="hv_ui_wrap">
                <div id="hv_ui">
                    <div id="hv_ui_id">
                        <div id="hv_ui_id_head" onClick={openID}></div>
                        <div id="hv_ui_id_name"><p>oddzag</p></div>
                        <div id="hv_ui_id_motto"><p>Ball like Wall</p></div>
                        <div id="hv_ui_id_update" onClick={openID}><p><u>Update my Habbo ID</u></p></div>
                    </div>
                    <div id="hv_ui_console">
                        <div id="console_icon" onClick={openConsole}></div>
                        <div id="console_messages">
                            <p>
                                0 New Message(s)<br />
                                0 Friend Request(s)
                            </p>
                        </div>
                    </div>
                    <div id="hv_ui_purse">
                        <p>hello</p>
                    </div>
                    <div id="hv_ui_nav">
                        <p>hello</p>
                    </div>
                    <div id="hv_ui_hc">
                        <p>hello</p>
                        </div>
                    <div id="hv_ui_help" onClick={openHelp}>
                        <div id="question_mark"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HotelView;

//STICK MESSAGES
function WelcomeMessage() {
    return (
        <>
            Hello, this is a work in progress. Things may or may not work depending on what I'm currently working on.
            <br /><br />
            For a more complete project, check out the <a href="https://habbo.gs/2003" target="_blank" rel="noreferrer">2003 hotel.</a>
            <br /><br />
            (ps. this is draggable :D )
            <br /><br />
            <span style={{float: 'right'}}>- oddzag</span>
        </>
    )
}