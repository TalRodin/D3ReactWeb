import React from 'react'
import styled from 'styled-components'
import Tilt from 'react-parallax-tilt';
import './Categories.css'

const B = styled.div`
    align-items:center;
    width: 90px;
    height: 90px;
    margin:auto;
    cursor: pointer;
    padding:1px;
    border-radius: 50%;
    border: 0.05px solid #663399;
    @media screen and (max-width: 489px) {
      padding:5px;
            } 
`


function Categories() {
    return (
        <>

    <Tilt>
      <div style={{ height: '100px', width:'100px', marginLeft:'50px',paddingBottom: '10px' , fontWeight: '300'}}>
          <B><p>Bar</p></B> 
      </div>
    </Tilt>
    
  
    <Tilt>
      <div style={{ height: '100px', width:'100px', marginLeft:'50px' ,paddingBottom: '10px'}}>
      <B><p>Line</p></B> 
          
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', marginLeft:'50px' ,paddingBottom: '10px'}}>
      <B><p>Stack</p></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', marginLeft:'50px',paddingBottom: '10px'}}>
      <B><p>Pie</p></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', marginLeft:'50px',paddingBottom: '10px' }}>
          <B><p>Chord</p></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', marginLeft:'50px' ,paddingBottom: '10px'}}>
          <B><p>Chord</p></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', marginLeft:'50px',paddingBottom: '10px' }}>
          <B><p>Chord</p></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', marginLeft:'50px',paddingBottom: '10px' }}>
          <B><p>Chord</p></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', marginLeft:'50px',paddingBottom: '10px' }}>
          <B><p>Chord</p></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', marginLeft:'50px',paddingBottom: '10px' }}>
          <B><p>Chord</p></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', marginLeft:'50px',paddingBottom: '10px' }}>
          <B><p>Chord</p></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', marginLeft:'50px',paddingBottom: '10px' }}>
          <B><p>Chord</p></B> 
      </div>
    </Tilt>
    </>
    )
}

export default Categories