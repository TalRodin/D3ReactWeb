import React from 'react';
import './App.css';
import styled from 'styled-components'
import Categories from './components/Categories'
import Header from './Header'

const H1=styled.h1`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
    color:#2f3136;
    font-size:20px;
    font-weight: 400;
    font-family: Helvetica;
    letter-spacing: 10px;
    word-spacing: 5px;
`
const Part1=styled.div`
    height: 100vh;
    // background-color:#24292e;
    // background: linear-gradient(90deg, #24292e 31px, transparent 1%) center, linear-gradient(#24292e 31px, transparent 1%) center, #53646e;
    // background-size: 32px 32px;
    // background: linear-gradient(90deg, #fff 31px, transparent 1%) center, linear-gradient(#fff 31px, transparent 1%) center, #53646e;
    // background-size: 32px 32px;
    
`
const Part2=styled.div`
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    @media screen and (max-width: 600px) {
      height: 100vh;
     
            }
`
const Part3=styled.div`
    height: 50vh;
    background-color:#24292e;
`

const C=styled.div`
display: grid;
grid-template-columns: repeat(6, 230px);
padding: 10px;
align-items: center;
@media screen and (max-width: 600px) {
  width: 80%;
  grid-template-columns: repeat(3, 150px);
  padding-left: 0px;
  padding-right: 0px;
        }

`

const T= styled.div`
width: 40%;
color:#53646e;
@media screen and (max-width: 600px) {
  width: 90%;
        }
      
`
const Hr = styled.hr`
    margin-top:30px;
    height: 0.5px;
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
        {/* <div className='arrow__down' ><i class="fa fa-angle-down"  aria-hidden="true"></i></div> */}
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
         <div className='line'></div>
        <h5>D3 React</h5>
      </Part3>
    </div>
  );
}

export default App;
