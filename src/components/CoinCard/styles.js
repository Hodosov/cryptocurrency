import styled from 'styled-components'
import { contrast } from '../../function/colorFunction'

export const Card = styled.div`
    display: flex;
    background-color: ${props => props.color};
    color: ${props => contrast(props.color)};
    height: 100px;
    margin: 5px;
    border: solid 1px;
    border-color: #000;
    border-radius: 5px;
`

export const Icon = styled.img`
    height: 50px;
`