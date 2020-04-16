import React from 'react';
import styled from 'styled-components'

const DateH3 = styled.h3`
  color: ${props => props.textColor ? 'goldenrod' : 'inherit'};
  background-color: ${props => props.BgColor ? 'blue' : 'inherit'};
`

const DateOne = (props) => {
  return <DateH3 textColor BgColor>{props.date}</DateH3>
}

export default DateOne