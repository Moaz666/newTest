import React, { Component } from 'react'
import Parent from '../../组件通信/Parent'
import { connect } from 'react-redux'
import HouseListItem from '../../components/HouseListItem'

 class History extends Component {
    render() {
        return (
            <div>
                {
                    this.props.historyList.map((item, key) => {
                        return (<HouseListItem item={item} key={item.id} />)
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        historyList: state.historyList
    }
}

export default connect(mapStateToProps)(History)


