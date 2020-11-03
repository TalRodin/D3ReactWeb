import React from 'react';
import './App.css';
import styled from 'styled-components'
import Categories from './components/Categories'
import Header from './Header'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const H1=styled.h1`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
    color:#2f3136;
    font-size:20px;
    font-weight: 300;
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
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div>
      <Header/>
      <Part1>
        <H1>D3 REACT</H1>
        <div >
            <Slider {...settings} >
                    <div >
                     <img src='https://i.pinimg.com/564x/32/e1/c1/32e1c1d569bb7f4dd1145416fb4902ac.jpg'/>
                     </div>
                    <div >
                     <img src='https://i.pinimg.com/564x/9a/61/de/9a61de2e902f49455fc0b7dec17e4a42.jpg'/>
                    </div>
                    <div >
                     <img src='https://i.pinimg.com/564x/32/e1/c1/32e1c1d569bb7f4dd1145416fb4902ac.jpg'/>
                    </div>
            </Slider>
            </div >
        {/* <div className='arrow__down' ><i class="fa fa-angle-down"  aria-hidden="true"></i></div> */}
      </Part1>
      <Part2>
        <C>
           <Categories />
        </C>
        <T>
        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat vitae ligula cursus elementum. Phasellus nisi sapien, tincidunt sed libero sit amet, aliquet elementum neque. Praesent bibendum sapien dui. Praesent malesuada, nisi nec porttitor luctus, lacus quam feugiat leo, a feugiat eros dui ac dolor. Sed non bibendum odio. Quisque venenatis nulla sed dapibus mollis. Phasellus sem nunc, pretium sed tincidunt eu, bibendum vel tortor. Nunc vitae risus dignissim, tempor lorem sit amet, sodales leo.</h6>
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
