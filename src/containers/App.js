import './App.css';
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'
import styled from "styled-components"
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const BgContainer = styled.div`
  background-color: #46B9C3;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  background-color: #C0C0C0;
  box-shadow: inset 1px 1px rgba(255, 255, 255, .5), 1px 1px rgba(0, 0, 0, .5);
  width: 100vw;
  height: 32px;
  position: absolute;
  bottom: 0;
`;


function App() {

  const [todos, setTodos] = useState([]);

  const renderTodos = () => {
    // 왜 프록시 연결 했는데도 /memo가 안 먹힐까.. 3000번으로 계속 연결됨..
    axios.get("http://localhost:3001/memo")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => {
        console.error('ERROR: ', error);
      })
    }
    
    useEffect(() => {
      renderTodos();
    }, [])

  return (
    <BgContainer>
      <Header renderTodos={renderTodos}/>
      <Main todos={todos} renderTodos={renderTodos}/>
      <Footer renderTodos={renderTodos}/>
      <Bottom>
        <img src="icon/start.png" />
      </Bottom>
    </BgContainer>
  );
}

export default App;
