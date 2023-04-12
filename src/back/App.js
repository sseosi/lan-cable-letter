import './App.css';
import styled from "styled-components"

const MainHeader = styled.div`
  background-color: #C0C0C0;
  width: 20em;
  height: 7em;
  border: 0.1rem solid #808080;
  display: flex;
  justify-content:center;
  align-items: center;
`;

const MainPhoto = styled.div`
  display: flex;
`;

const BgContainer = styled.div`
  background-color: #46B9C3;
  width: 1920px;
  height: 969px;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <>
     <BgContainer>
        <MainHeader>To-Do-List</MainHeader>
        <MainPhoto><img src="img/main.PNG" /></MainPhoto>
      </BgContainer> 
    </>
  );
}

export default App;
