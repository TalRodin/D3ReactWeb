import React from 'react'
import styled from 'styled-components'
import Tilt from 'react-parallax-tilt';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import './Categories.css'
import Tooltip from "@material-ui/core/Tooltip";

const B = styled.div`

    display:flex;
    align-items:center;
    width: 225px;
    height: 105px;
    margin:auto;
    cursor: pointer;
    padding:1px;
    border-radius: 2%;
    border: 0.1px solid #e7eaec;
    @media screen and (max-width: 489px) {
      padding:5px;
            } 
    &:hover{
      border: 0.1px solid #24292e;
      transition:0.3s ease;
      
    }
`



const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#37393f",
    color: '#eee',
    boxShadow: theme.shadows[4],
    fontSize: 11,
    border: '1px solid #37393f',
    maxWidth: 120,
    
  },
  arrow: {
    color: "#37393f",
    
  }
  ,
}))(Tooltip);

function Categories() {
    return (
        <>

       <Tilt>
       <LightTooltip
    title="Bar, Stacked Bar, Diverging Bar, Horizontally/Vertically aligned Bar Charts"
    placement="right"
    arrow
   
  >
      <div style={{ height: '100px', width:'100px',paddingBottom: '10px' , fontWeight: '300'}}>
          <B><svg width="157" height="99" viewBox="0 0 317 179" fill="none" xmlns="http://www.w3.org/2000/svg">

<rect x="109.5" y="45.5" width="12" height="97" fill="#0166d6" stroke="#0166d6"/>
<rect x="133.5" y="56.5" width="12" height="86" fill="#0166d6" stroke="#0166d6"/>
<rect x="157.5" y="74.5" width="12" height="68" fill="#0166d6" stroke="#0166d6"/>
<rect x="180.5" y="61.5" width="12" height="81" fill="#0166d6" stroke="#0166d6"/>
</svg>
          </B> 
      </div>
      </LightTooltip>
    </Tilt>
      
    
    
  
    <Tilt>
    <LightTooltip
    title="Line Chart, Double Line Chart"
    placement="right"
    arrow
  >
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px'}}>
      <B ><svg width="157" height="99" viewBox="0 0 317 179" fill="none" stroke="#0166d6" stroke-width="4" xmlns="http://www.w3.org/2000/svg">

<path d="M78 126L109.636 94.5893H142.364L162 69.4608L193 108.824L238 53" />
</svg></B> 
          
      </div>
      </LightTooltip>
    </Tilt>
    <Tilt>
    <LightTooltip
    title="Bubble Chart"
    placement="right"
    arrow
  >
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px'}}>
      <B><svg width="157" height="99" viewBox="0 0 317 179" fill="none" xmlns="http://www.w3.org/2000/svg">

<circle cx="131" cy="100" r="31.5" fill="#0166d6" stroke="#0166d6"/>
<circle cx="185.5" cy="68.5" r="22" fill="#0166d6" stroke="#0166d6"/>
<circle cx="181.5" cy="108.5" r="8" fill="#0166d6" stroke="#0166d6"/>
</svg></B> 
      </div>
      </LightTooltip>
    </Tilt>
    <Tilt>
    <LightTooltip
    title="Bubble Chart"
    placement="right"
    arrow
  >
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px'}}>
      <B></B> 
      </div>
      </LightTooltip>
    </Tilt>
    <Tilt>
    <LightTooltip
    title="Bubble Chart"
    placement="right"
    arrow
  >
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
      </LightTooltip>
    </Tilt>

   
    <Tilt>
    <LightTooltip
    title="Bubble Chart"
    placement="right"
    arrow
  >
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px'}}>
          <B></B> 
      </div>
      </LightTooltip>
    </Tilt>
    <Tilt>
    <LightTooltip
    title="Bubble Chart"
    placement="right"
    arrow
  >
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
      </LightTooltip>
    </Tilt>
    <Tilt>
    <LightTooltip
    title="Bubble Chart"
    placement="right"
    arrow
  >
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
      </LightTooltip>
    </Tilt>
    <Tilt>
    <LightTooltip
    title="Bubble Chart"
    placement="right"
    arrow
  >
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
      </LightTooltip>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
    </Tilt>
    <Tilt>
      <div style={{ height: '100px', width:'100px', paddingBottom: '10px' }}>
          <B></B> 
      </div>
    </Tilt>

    </>
    )
}

export default Categories