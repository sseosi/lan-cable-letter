import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const Myword = styled.div`
    background-color: #C0C0C0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 393px;
    height: 90px;
    font-size: 2.5rem;
    box-shadow: inset 1px 1px rgba(255, 255, 255, .5), 1px 1px rgba(0, 0, 0, .5);
    margin-top: 50px;
`;

const Heder = styled.div`
    background: linear-gradient(90deg, #FFFF01, #Fa27D8);
    color: white;
    font-size: 12pt;
    font-weight: 500;
    display: flex;
    align-items: center;
    width: 98.5%;
    box-shadow: inset 1px 1px rgba(255, 255, 255, .5), 1px 1px rgba(0, 0, 0, .5);
    img:last-child {
        margin-left: auto;
        display: block;
        padding-right: 5px;
    }
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    input {
        margin: 0 20px;
    }
    button {
        background-color: transparent;
        border: 0;
        box-shadow: inset 1px 1px rgba(255, 255, 255, .5), 1px 1px rgba(0, 0, 0, .5);
        width: 50px;
        height: 25px;
        :active {
            box-shadow: inset 1px 1px rgba(0, 0, 0, .5), 1px 1px rgba(255, 255, 255, .5);
        }
    }
`


const Wepfooter = ({renderTodos}) => {
    const [writeinput, setWriteinput] = useState('');
    const writeinputEl = useRef(null);

    const handleWriteInputChange = (event) => {
        setWriteinput(event.target.value);
    }

    const handleWriteSubmitBtnClick = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/memo',
            data: {
                title:writeinput
            }
        })
        .then(() => {
            writeinputEl.current.value = "";
            renderTodos();
        })
        .catch((error) => {
            console.error('ERROR: ', error);
        })
    }

    return (    
    <Myword>
        <Heder>
            <img src="icon/icon-1.png" />
            Your message
            <img src="icon/exit.png" />
        </Heder>
        <Footer>
            <img src="icon/kirby-2.png" />
            <input
            type='text'
            id="todo_write" 
            placeholder="어쩌구저쩌구"
            maxLength={30}
            ref={writeinputEl}
            onChange={(e) => {handleWriteInputChange(e)}}
             />
            <button onClick={handleWriteSubmitBtnClick}>등록</button>
        </Footer>
    </Myword>
)};

export default Wepfooter;