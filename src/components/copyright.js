import React from 'react';
import styled from 'styled-components';

const CopyrightH4 = styled.h4`
    
    color: #FF4500;
    font-family: 'Merienda', cursive;
    font-size: 0.8em;
  
  `

const Copyright = (props) => {

  
  return (<div>
    <CopyrightH4>Image Credit & Copyright: {props.copyright}</CopyrightH4>
  </div>)
}

export default Copyright