import React from 'react'
import { getCoinsThunk } from '../redux/CoinsReducer'
import { connect } from 'react-redux'
import { CoinCard } from './CoinCard/index'

class CoinCardContainer extends React.Component {

    componentDidMount() {
        this.props.getCoinsThunk()
    }

    render() {
        return <div>
            {this.props.coins.map(el => <CoinCard
                color={el.color}
                key={el.id}
                src={el.iconUrl}
                name={el.name}
            />
            )}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        coins: state.coins.coins
    }
}

export let CoinsCards = connect(mapStateToProps, { getCoinsThunk })(CoinCardContainer)