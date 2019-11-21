import React, { Component } from 'react'
import Child2 from './Child2';
import { connect } from 'react-redux'

class Child1 extends Component {
    render() {
        const { name, sex } = this.props;
        return (
            <div>
                Parent  姓名： {name}性别：{sex}
                <Child2 />
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        name: state.name,
        sex: state.sex,
    }
}
export default connect(mapStateToProp)(Child1);
