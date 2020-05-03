import React from 'react'
import { Card, Icon } from './styles'
import { Chart } from './Chart'

export const CoinCard = (props) => {
    return (
        <Card
                color={props.color}
                key={props.key}>
                <Icon src={props.src} />
                {props.name}
                <Chart history={props.history} 
                color={props.color}
                />
        </Card>
    )
}

