import React, { useState }  from 'react';
import DraggableCore from 'react-draggable';

function Sticky({showSticky, setShowSticky, message}) {

    const [bg, setBG] = useState('sticky_bg_b');
    const closeSticky = () => {  
        setShowSticky(!showSticky);
    };
    return (
        //n1
        <DraggableCore defaultPosition={{x: 400, y: 200}}>
            <div className={"sticky " + bg}>
                <div className="sticky_head">
                    <div className="sticky_bin" onClick={closeSticky}></div>
                    <div className="sticky_b" onClick={() => setBG('sticky_bg_b')}></div>
                    <div className="sticky_p" onClick={() => setBG('sticky_bg_p')}></div>
                    <div className="sticky_g" onClick={() => setBG('sticky_bg_g')}></div>
                    <div className="sticky_y" onClick={() => setBG('sticky_bg_y')}></div>
                    <div className="sticky_exit" onClick={closeSticky}></div>
                </div>
                <p>
                    {message}
                </p>
            </div>
        </DraggableCore>
    )
}

export default Sticky;

//Draggable's documentation does not allow for variable values of x/y bounds
//(or I just haven't figured it out yet)
//will need that functionality to account for big/small monitors
//x/y values are in px