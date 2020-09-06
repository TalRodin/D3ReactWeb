import React from 'react';
import './App.css';
import styled from 'styled-components'
import Categories from './components/Categories'

const H1=styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
    color:#6d5dfc;
    font-size:60px;
    font-weight: 400;
    font-family: "Lato", sans-serif;
    letter-spacing: 2px;
    word-spacing: 30px;
`
const Part1=styled.div`
    height: 100vh;
   
`
const Part2=styled.div`
    height: 80vh;
    // background-color:#6d5dfc;
`
const Part3=styled.div`
    height: 25vh;
    background-color: #eee;
`
function App() {
  return (
    <div>
      <Part1>
        <H1>D3 REACT</H1>
      </Part1>
      <Part2>
        <Categories />
      </Part2>
      <Part3>
        footer
      </Part3>
    </div>
  );
}

export default App;
