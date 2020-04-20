import React from 'react'
import styled from 'styled-components';

const TitleH1 = styled.h4`
    
    color: #00008B;
    font-family: 'Prata', serif;
    font-size: 3em;
    margin: 0;
    padding: 10px;
  
  `

const Title = (props) => {
  return <TitleH1>{props.title}</TitleH1>
}

export default Title