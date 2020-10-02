import React from 'react'
import './Header.css'
import styled from 'styled-components'

const A=styled.a`
    color:#eee;
    padding:30px;
    font-size:30px;
`
function Header() {
    return (
        <div className='header'>
            <A  href="https://github.com/TalRodin/D3js-react" class="icon-link" title="Linkedin"><i class="fa fa-github"  aria-hidden="true"></i></A>
        </div>
    )
}

export default Header
