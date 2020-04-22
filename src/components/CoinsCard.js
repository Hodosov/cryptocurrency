import React from 'react'
import * as axios from 'axios'
import { getCoinsAC } from '../redux/CoinsReducer'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Cards = styled.div`
    background-color: ${props => props.color === '#000000' ? '#fff' : props.color };
    color: ${props => props.color === '#000' ? '#fff' : '#000'};
    height: 100px;
    margin: 5px;
    border: solid 1px;
    border-color: #000;
    border-radius: 5px;
`

const Icon = styled.img`
    height: 50px;
`

class Coin extends React.Component {

    componentDidMount() {
        axios.get('https://api.coinranking.com/v1/public/coins')
            .then(responsce => this.props.getCoins(responsce.data.data.coins))
    }

    render() {
        return <div>
            {this.props.coins.map(el => <Cards
                color={el.color}
                key={el.di}>
                    <Icon src={el.iconUrl} />
                {el.name}
            </Cards>)}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        coins: state.coins.coins
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getCoins: (coins) => {
            dispatch(getCoinsAC(coins))
        }
    }
}

export let CoinsCard = connect(mapStateToProps, mapDispatchToProps)(Coin)