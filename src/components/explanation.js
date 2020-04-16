import React from 'react';
import styled from 'styled-components';

const ParagraphEx = styled.p`
    
    color:  ${props => props.textColor ? props.textColor : 'inherit'};
    text-transform: ${props => props.scream ? 'uppercase' : 'inherit'};
    font-family: 'Amatic SC';
    font-size: 2em;
  
  `



const Explanation = (props) => {
  return <ParagraphEx textColor='lightgrey' scream><strong>Explanation:</strong> {props.explanation}</ParagraphEx>
}

export default Explanation