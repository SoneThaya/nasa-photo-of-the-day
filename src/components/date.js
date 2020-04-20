import React from 'react';
import styled from 'styled-components'

const DateH3 = styled.h3`
  color: ${props => props.textColor ? 'firebrick' : 'inherit'};
  font-size: 4em;
  font-family: 'Bangers', cursive;
  margin: 0;
  padding: 10px;
`

const DateOne = (props) => {
  return <DateH3 textColor BgColor>{props.date}</DateH3>
}

export default DateOne