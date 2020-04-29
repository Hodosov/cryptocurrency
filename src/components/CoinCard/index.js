import React from 'react'
import { Card, Icon } from './styles'

export const CoinCard = (props) => {
    return (
        <Card
                color={props.color}
                key={props.key}>
                <Icon src={props.src} />
                {props.name}
            </Card>
    )
}

