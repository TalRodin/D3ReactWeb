import React from 'react'
import styled from 'styled-components'
import Tilt from 'react-parallax-tilt';

const B = styled.div`
    align-items:center;
    width: 20px;
    height: 20px;
    margin:6px;
    cursor: pointer;
    float:left;
    padding:10px;
    border-radius: 50px;
    border: 0.05px solid #6d5dfc;
    @media screen and (max-width: 489px) {
      padding:5px;
            } 
`

function Categories() {
    return (
            <div>
       
                <B><i class="fa fa-bar-chart" style={{padding:'3px', color:"#6d5dfc"}} ></i></B>
             
            </div>
    )
}

export default Categories