import React, { useState }  from 'react';
import Draggable from 'react-draggable';

function ID({showID, setShowID}) {

    const closeID = () => {  
        if(showID) setShowID(false);
        else setShowID(true);
    };

    return (
        <Draggable defaultPosition={{x: 300, y: 200}}>
            <div id="habbo_id">
                <div id="id_top">
                    <div id="box_title">
                        Habbo Details
                    </div>
                    <div id="box_default_exit" onClick={closeID}></div>
                </div>
                
                <div id="id_mid">
                    <div id="id_content">
                        <div id="details_top">
                            <div id="details_username">oddzag</div>
                            <div id="details_mission">Your Mission:</div>
                            <div id="details_motto">Ball like Wall</div>
                        </div>

                    {/*I'm going to create a custom imager, but I don't wanna do it yet*/}

                    </div>
                </div>
                <div id="id_bottom"></div>

            </div>
        </Draggable>
    )
}

export default ID;

{/* feel free to refactor, it's bloated for readability. 
    I'll refactor it at some point but idc for now*/}