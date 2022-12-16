import React, { useState }  from 'react';
import Dropdown from 'react-dropdown';
import Draggable from 'react-draggable';

import ID from './ID.js';
//import Console from './Console.js';
//import Purse from './Purse.js';
//import Navigator from './Navigator.js';
//import HC from './HC.js';
import Help from './Help.js';

const views = [
    { value: 'uk', label: 'UK' },
    { value: 'br', label: 'Brazil' },
    { value: 'ca', label: 'Canada' },
    { value: 'us', label: 'US' },
    { value: 'fr', label: 'France' },
    { value: 'au', label: 'Australia' },
    { value: 'sg', label: 'Singapore' },
    { value: 'dk', label: 'Denmark' },
    { value: 'fi', label: 'Finland' },
    { value: 'uk', label: 'UK' },
    { value: 'ch', label: 'Switzerland' },
    { value: 'jp', label: 'Japan' },
    { value: 'es', label: 'Spain' },
    { value: 'it', label: 'Italy' },
    { value: 'se', label: 'Sweden' },
    { value: 'nl', label: 'Netherlands' }
]

function HotelView(props) {

    const [showID, setShowID] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const [showSticky, setShowSticky] = useState(false);

    //flips state to false to hide component
    const openID = () => {
        if(showID) setShowID(false);
        else setShowID(true);
    }

    const openHelp = () => { 
        if(showHelp) setShowHelp(false);
        else setShowHelp(true);
    }

    const closeSticky = () => {  
        if(showSticky) setShowSticky(true);
        else setShowSticky(true);
    };

    return (
        <>
        {/*refactor for function components
            <div id="hv_select">
                <Dropdown 
                    options={views} 
                    onChange={this._onSelect} 
                    value="Hotel view" 
                    className="hv_select_menu"
                />
            </div>*/}
        <div id="corner_logo"></div>
        <div id="hv_uk"></div>

        {/*this is where the component is rendered, but removed if setShow flag is false */} 
        {showSticky ? <ID showSticky={showSticky} setShowSticky={setShowSticky}/> : null}

        {showID ? <ID showID={showID} setShowID={setShowID}/> : null}
        {showHelp ? <Help showHelp={showHelp} setShowHelp={setShowHelp}/> : null}


        <div id="hv_ui_bg">
            <div id="hv_ui_wrap">
                <div id="hv_ui">
                    <div id="hv_ui_id">
                        <div id="id_head" onClick={openID}></div>
                        <div id="id_name"><p>oddzag</p></div>
                        <div id="id_motto"><p>Ball like Wall</p></div>
                        <div id="update" onClick={openID}><p><u>Update my Habbo ID</u></p></div>
                    </div>
                    <div id="hv_ui_console">
                        <p>hello</p>
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