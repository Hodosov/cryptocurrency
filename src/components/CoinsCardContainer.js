import React from 'react'
import { getCoinsThunk } from '../redux/CoinsReducer'
import { connect } from 'react-redux'
import { CoinCard } from './CoinCard/index'

class CoinCardContainer extends React.Component {

    componentDidMount() {
        this.props.getCoinsThunk()
    }

    render() {
        return (
            <div>
                {this.props.loading 
                ?  <div>
                    {this.props.coins.map(el => <CoinCard
                        color={el.color}
                        key={el.id}
                        src={el.iconUrl}
                        name={el.name}
                    />
                    )}
                </div>
                : <h1>ERROR</h1>}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        coins: state.coins.coins,
        loading: state.coins.loading
    }
}

export let CoinsCards = connect(mapStateToProps, { getCoinsThunk })(CoinCardContainer)