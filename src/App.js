import React from 'react';
import './App.css';
import styled from 'styled-components'
import Categories from './components/Categories'
import Header from './Header'

const H1=styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
    color:#663399;
    font-size:30px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    letter-spacing: 2px;
    word-spacing: 10px;
`
const Part1=styled.div`
    height: 100vh;
    background-color:#24292e;
    // background: linear-gradient(90deg, #24292e 31px, transparent 1%) center, linear-gradient(#24292e 31px, transparent 1%) center, #53646e;
    // background-size: 32px 32px;
    background: linear-gradient(90deg, #fff 31px, transparent 1%) center, linear-gradient(#fff 31px, transparent 1%) center, #24292e;
    background-size: 32px 32px;
    
`
const Part2=styled.div`
height: 80vh;
display: flex;
align-items:center;
justify-content:center;
// background: linear-gradient(90deg, #fbfbfb 31px, transparent 1%) center, linear-gradient(#fbfbfb 31px, transparent 1%) center, #24292e;
// background-size: 32px 32px;
`
const Part3=styled.div`
    height: 10vh;
    // background-color:#24292e;
`

const C=styled.div`
width: 50%;
display: grid;
grid-template-columns: repeat(4, 150px);
padding-left: 20px;

padding-right: 20px;
align-items: center;
// background: linear-gradient(#24292e 1%, #24292e 90%)

`

const T= styled.div`
width: 40%;
`
const Hr = styled.hr`
    height: 1px;
    background-color: #e1e4e8;
    border: none;
    width:90vw;
`



function App() {
  return (
    <div>
      <Header/>
      <Part1>

      
        <H1>D3 REACT</H1>
        <div className='arrow__down'><i class="fa fa-angle-down" aria-hidden="true"></i></div>
      </Part1>
      <Part2>
       
        <C>
           <Categories />
        </C>
        <T>
        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
        </T>
      </Part2>
      <Part3>
        <Hr/>
        <h5>© 2020 D3 React.</h5>
      </Part3>
    </div>
  );
}

export default App;
