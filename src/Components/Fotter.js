import React from 'react'
import styled from "styled-components";

const Footer = () => {

  const curretnYear = new Date().getFullYear();
  return (
    <FooterStyle>

         <p>© Kawan Idrees. <br className='br'/> <strong>{curretnYear}</strong></p>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
margin-top: 5rem;


br{
    display: none;
}
p{
    font-family: 'Merriweather', serif;
    text-align: center;
    line-height: 2;
    font-weight:400;
    color: white;
    font-size:1.5rem;
}

@media screen and (max-width:500px) {
   
    
    br{
        display: block;
    }
}


`

export default Footer