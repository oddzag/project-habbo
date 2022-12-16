import React, { useState }  from 'react';
import Draggable from 'react-draggable';

function Help({showHelp, setShowHelp}) {

    const closeHelp = () => {  
        if(showHelp) setShowHelp(false);
        else setShowHelp(true);
    };

    return (
        <>
            <Draggable defaultPosition={{x: 800, y: 200}}>
            <div id="habbo_help">
                <div id="help_top">
                    <div id="box_title">
                        Alert a Moderator
                    </div>
                    <div id="box_default_exit" onClick={closeHelp}></div>
                </div>
                
                <div id="help_mid">
                    <div id="question_mark" style={{margin: '17px 0 0 22px', position: 'absolute'}}></div>
                    <div id="help_content">
                        <p className="b" style={{marginBottom: '10px'}}>
                            In Trouble?
                            <br /><br /><br />
                            Help Topics:
                        </p>
                        <span id="help_topics">
                            <ul>
                                <li><a href="https://habbo.gs/2003/credits" target="_blank">How do I get Credits?</a></li>
                                <li><a href="https://habbo.gs/2003/help/contact/password" target="_blank">Password Reset</a></li>
                                <li><a href="https://habbo.gs/2003/help" target="_blank">Help with Habbo Hotel</a></li>
                                <li><a href="https://habbo.gs/2003/help/safety" target="_blank">The Habbo Way</a></li>
                                <li><a href="https://habbo.gs/2003/help/safety" target="_blank">Safety Tips</a></li>
                                <li><a href="https://habbo.gs/2003/help/contact" target="_blank">Contact Us</a></li>
                            </ul>
                        </span>

                        <div id="box_button_ok" onClick={closeHelp}></div>
                        <div id="box_button_tutorial"></div>
                    </div>
                </div>
                <div id="help_bottom"></div>

            </div>
        </Draggable>
        </>)

}

export default Help;

{/* feel free to refactor, it's bloated for readability. 
    I'll refactor it at some point but idc for now*/}