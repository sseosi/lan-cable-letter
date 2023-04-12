import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

const Word = styled.div`
    background-color: #C0C0C0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 393px;
    height: 500px;
    font-size: 2.5rem;
    box-shadow: inset 1px 1px rgba(255, 255, 255, .5), 1px 1px rgba(0, 0, 0, .5);
`;

const Heder = styled.div`
    background-color: #Fa27D8;
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

const Menu = styled.div`
    margin-right: auto;
    ul {
        display: flex;
        list-style:none;
        font-size: 10pt;
        margin: 0;
        padding: 3px 0 3px 5px;
        li {
            margin-right: 10px;
        }
    }
`

const Memo = styled.div`
    display: flex;

    height: 421px;
    background-color: white;
    width: 97%;
    box-shadow: inset 1px 1px rgba(0, 0, 0, .5), 1px 1px rgba(255, 255, 255, .5);
    ul{
        width: 100%;
        margin: 8px;
        padding: 0;
        list-style:none;
        font-size: 10pt;
        
        li {
            display: flex;
            align-items: center;
            height: 25px;
            padding: 0 0 5px 0;
            border-bottom: solid 1px #c0c0c0;
        }

        button:last-child {
            margin-left: auto;
            display: block;
            height: 20px;
            background: transparent;
            border: 0;
    }
    }
`

const Arrow = styled.div`
    background-color: #DADADA;
    box-shadow: inset 1px 1px rgba(255, 255, 255, .2), 1px 1px rgba(0, 0, 0, .2);
    margin-left: auto;
    width: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Footer = styled.div`
    width: 97%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #DADADA;
`


const Main = ({todos, renderTodos}) => {

    let [postId, setPostId] = useState()

    // const handleDelteBtnClick = () => {
    //     axios.delete(`http://localhost:3001/memo/${postId}`);
    //     renderTodos();
    // }

    const handleDelteBtnClick = () => {
        axios
        .delete(`http://localhost:3001/memo/${postId}`)
        .then(() => {
            renderTodos();
        })
        .catch((error) => {
            console.error('ERROR: ', error);
        })
    }

    return (
    <Word>
        <Heder>
            <img src="icon/icon-2.png" />
            Message
            <img src="icon/exit.png" />
        </Heder>
        <Menu>
            <ul>
                <li>File</li>
                <li>Edit</li>
                <li>Search</li>
                <li>Help</li>
            </ul>
        </Menu>
        <Memo>
            <ul>
                {todos.map((el)=>{
                    return (
                        <li key={el.id}><span>ㆍ</span>{el.title}<button onClick={()=>{
                            setPostId(el.id)
                            handleDelteBtnClick()
                        }}><img src="icon/end.png" /></button></li>
                    )
                })}
            </ul>
            <Arrow>
                <img src="icon/arrow-3.png" />
                <img src="icon/arrow-4.png" />
            </Arrow>
        </Memo>
        <Footer>
            <img src="icon/arrow-2.png" />
            <img src="icon/arrow-1.png" />
        </Footer>
    </Word>
);
}

export default Main;