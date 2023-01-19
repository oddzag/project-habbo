import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { notesClose } from '../../store/notes.js';
import { idClose } from '../../store/id.js';
import { consoleClose } from '../../store/console.js';
import { loginClose } from '../../store/console.js';
import { signupClose } from '../../store/console.js';

//-----------------------------------------------
//            Styled components imports
//-----------------------------------------------

import lightbulb from '../../img/ui/light.gif';
import lightbulb_active from '../../img/ui/light_active.png';
import head from '../../img/ui/head.png';
import console from '../../img/ui/icon.png';
import purse from '../../img/ui/purse.png';
import nav from '../../img/ui/nav.gif';
import hc from '../../img/ui/HC.gif';
import help from '../../img/ui/help.png';

const BG = styled.div`
    background-color: #000;
    width: 100%;
    height: 59px;
    bottom: 0;
    left: 0;
    position: fixed;
    padding: 6px;`

//Once again, adding a left padding to counter-act the blur
const Wrap = styled.div`
   width: max-content;
   margin: 0 auto;
   padding-left: 2px;`

const Item = styled.div`
    width: max-content;
    display: ${props => props.display ||  "inline-block" };
    float: ${props => props.float ||  "" };
    position: ${props => props.position ||  "" };`

const Text = styled.div`
    color: #FFF;
    float: right;
    margin: ${props => props.margin ||  "" };`
    
/*const Archive = styled.div`                     //Removed for conflicting state declaritives
    background-image: url(${lightbulb});
    background-repeat: no-repeat;
    width: 20px;
    height: 32px;
    float: left;
    padding-right: 25px;
    :hover {
        background-image: url(${lightbulb_active})
    }`
*/
const Head = styled.div`
    background-image: url(${head});
    width: 26px;
    height: 33px;
    float: left;
    margin-right: 8px;`

const Console = styled.div`
    background-image: url(${console});
    width: 20px;
    height: 35px;
    float: left;
    margin-right: 8px;`

const Purse = styled.div`
    background-image: url(${purse});
    width: 27px;
    height: 31px;
    float: left;
    margin-right: 8px;`

const Nav = styled.div`
    background-image: url(${nav});
    width: 35px;
    height: 35px;
    margin-right: 20px;`

const HC = styled.div`
    background-image: url(${hc});
    width: 34px;
    height: 39px;
    float: left;
    margin-right: 8px;`

const Help = styled.div`
    background-image: url(${help});
    width: 20px;
    height: 30px;`

function UI() {
    const dispatch = useDispatch();
    //const {notesOpen} = useSelector((state) => state.notes); //Removed for conflicting state declaritives
    const {idOpen} = useSelector((state) => state.id);
    const {consoleOpen, loginOpen, signupOpen} = useSelector((state) => state.console);

    const {isAuthenticated} = useSelector((state) => state.auth);
    
    return (
        <>
        <BG>
            <Item position="absolute">
                {/*<Archive onClick={() => {dispatch(notesClose(!notesOpen))}}/> //Removed for conflicting state declaritives*/}
                <Text margin="5px 0 0 0">
                    project Habbo<br />
                    Archive
                </Text>
            </Item>
            {isAuthenticated ? (
                <>
                    <Wrap>
                        <Item>
                            <Head onClick={() => {dispatch(idClose(!idOpen))}}/>
                            <Text margin="0 40px 0 0">
                                username<br />
                                motto<br />
                                <u>Update My Habbo ID {'>>'}</u>
                            </Text>
                        </Item>
                        <Item>
                            <Console onClick={() => {dispatch(consoleClose(!consoleOpen))}}/>
                            <Text margin="10px 20px 0 0">
                                0 New Message(s)<br />
                                0 Friend Request(s)
                            </Text>
                        </Item>
                        <Item>
                            <Purse />
                            <Text margin="5px 34px 0 0">
                                0 Credits<br />
                                <u>How To get?</u>
                            </Text>
                        </Item>
                        <Item>
                            <Nav />
                        </Item>
                        <Item>
                            <HC />
                            <Text margin="12px 0 0 0">
                                Habbo Club<br />
                                Join!
                            </Text>
                        </Item>
                    </Wrap>
                    <Item float="right">
                        <Help />
                    </Item>
                </>
            ) : null}
        </BG>
        </>
    )
}

export default UI;