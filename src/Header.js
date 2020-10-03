import React from 'react'
import './Header.css'
import styled from 'styled-components'

const A=styled.a`
    // display:flex;
    color:#eee;
    padding-left:20px;
    font-size:20px;
    
`
function Header() {
    return (
        <div className='header'>
            <div className='icons'>
            <A  href="https://github.com/TalRodin/D3js-react" class="icon-link" title="Linkedin"><i class="fa fa-github"  aria-hidden="true"></i></A>
            <A  href="" class="icon-link" title="Medium"><i class="fa fa-medium" aria-hidden="true"></i></A>
            <A  href="" class="icon-link" title="Reddit"><i class="fa fa-reddit" aria-hidden="true"></i></A>
            <A  href="" class="icon-link" title="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></A>
            <A  href="" class="icon-link" title="Instagram"><i class="fa fa-twitter" aria-hidden="true"></i></A>
            <A  href="" class="icon-link" title="Mastodon" style={{paddingTop:'6px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#eee'  viewBox="0 0 15 15" width="20" height="20" class="mastodon-icon">
                    <path d="M13.578 5.205c0-2.778-1.823-3.593-1.823-3.593-.916-.42-2.493-.598-4.132-.612h-.044c-1.64.014-3.211.193-4.132.612 0 0-1.823.815-1.823 3.593 0 .636-.01 1.398.01 2.203.067 2.72.496 5.396 3.009 6.062a9.46 9.46 0 0 0 2.956.328c1.451-.082 2.27-.516 2.27-.516l-.047-1.056s-1.042.328-2.204.29c-1.153-.04-2.373-.126-2.56-1.544a2.626 2.626 0 0 1-.025-.4s1.133.28 2.57.342c.878.044 1.703-.048 2.542-.15 1.606-.192 3.004-1.18 3.178-2.082.28-1.428.255-3.477.255-3.477zm-2.146 3.578h-1.33V5.518c0-.69-.29-1.037-.869-1.037-.641 0-.96.415-.96 1.235v1.789H6.949v-1.79c0-.819-.323-1.234-.96-1.234-.579 0-.868.348-.868 1.037v3.265H3.775V5.417c0-.69.173-1.235.525-1.64.362-.405.84-.612 1.428-.612.68 0 1.2.26 1.538.786l.333.555.332-.555c.343-.526.859-.786 1.539-.786.588 0 1.065.207 1.427.612.352.405.526.95.526 1.64v3.366z"></path>
                </svg></A>
            </div>
        </div>
    )
}

export default Header
