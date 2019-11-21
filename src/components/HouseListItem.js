import React, { Component } from 'react'
import { Flex } from 'antd-mobile'
import PropTypes from 'prop-types';


export default class HouseListItem extends Component {
    //定义属性值的类型 prop-types
    static propTypes = {
        item: PropTypes.object,
    }
    //定义属性的默认值
    state = {
        item: {},
        onClick: () => { }
    }

    render() {
        let { item, onClick } = this.props
        return (
            <Flex onClick={() => onClick(item)} style={{ background: '#fff', marginBottom: 10, paddingRight: 10 }} key={item.id}>
                <img style={{ width: 100, height: 100 }} src={item.pic} />
                <div style={{ flex: 1, marginLeft: 10 }}>
                    <div style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</div>
                    <Flex justify="between">
                        <div>{item.address}</div>
                        <div style={{ color: 'red' }}>{item.price}/平米</div>
                    </Flex>

                </div>
            </Flex>
        )
    }
}
