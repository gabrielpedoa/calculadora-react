import React from 'react'
import styled from 'styled-components'

const VisorBox = styled.div`
    font-size: 2em;
    font-weight: 700;
    word-break: break-all;
    text-align: right;
`

export const Visor = ({value}) => {
  return (
    <VisorBox id="visor">{value}</VisorBox>
  )
}
