/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Flex, Carousel, Grid } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { getHouseListApi } from '../../apis/apis'
import HouseListItem from '../../components/HouseListItem'

import { connect } from 'react-redux'
import { setHistory } from '../../store'

//组件的方法
// const data = Array.from(new Array(9)).map((_val, i) => ({
//     icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
//     text: `name${i}`,
//   }));

//定义饭餐类别列表
let data = [
    { icon: "fangzhi (1).png", text: "小区房" },
    { icon: "fangzhi (1).png", text: "小区房" },
    { icon: "fangzhi (1).png", text: "小区房" },
    { icon: "fangzhi (1).png", text: "小区房" },
    { icon: "fangzhi (1).png", text: "小区房" },
    { icon: "fangzhi (1).png", text: "小区房" },
    { icon: "fangzhi (1).png", text: "小区房" },
    { icon: "fangzhi (1).png", text: "小区房" },
    { icon: "fangzhi (1).png", text: "小区房" },
].map((item, key) => {
    return {
        icon: require(`../../assets/imgs/${item.icon}`),
        text: item.text
    }
})

class Home extends Component {
    state = {
        city: "定位中...", //城市定位
        data: ['lunbo (1).jpg', 'lunbo (2).jpg', 'lunbo (3).jpg'], //轮播图片
        imgHeight: 176,
        houseList: [],  //猜你喜欢的数据
    }

    changLocation = () => {
        this.props.history.push('/location') //跳转到位置
    }
    changSearch = () => {
        this.props.history.push('/search') //跳转到搜索
    }
    changMap = () => {
        this.props.history.push('/map') //跳转到地图
    }

    componentDidMount() {
        const { city } = this.state
        let _this = this;  //定义this
        //定位函数
        window.AMap.plugin('AMap.CitySearch', function () {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    _this.setState({ city: result.city })
                }
            })
        })
        //调用房产列表
        this.getlist()
    }
    //获取后台的房产列表
    getlist = () => {
        getHouseListApi()
            .then((res) => {
                this.setState({ houseList: res.data.data })

            })
            .catch((e) => {
                console.log("e", e);
            })
    }
    clickHouse = (item) => {
        // alert("已查看该信息")
        this.props.dispatch(setHistory(item))
    }
    render() {
        let { city, houseList } = this.state
        return (
            <div>
                {/* 顶部 */}
                <Flex justify='around' style={{ background: "#00BC5B", height: 50 }}>
                    <Flex onClick={this.changLocation} align='center' style={{ color: '#fff' }}>
                        {city}
                        <img style={{ width: 14, height: 20 }} src={require('../../assets/imgs/daosanjiao.png')}></img>
                    </Flex>
                    <Flex onClick={this.changSearch} align="center" style={{ background: "#fff", width: "60%", borderRadius: 20, height: "80%", textIndent: 10, paddingLeft: 10 }}>
                        <img style={{ width: 30, height: 30 }} src={require('../../assets/imgs/sousuo.png')}></img>
                        <span style={{ color: "#8A8A8A" }}>搜房，上源码搜房。。。</span>
                    </Flex >
                    <Flex onClick={this.changMap} align="center"><img style={{ width: 30, height: 30 }} src={require('../../assets/imgs/map.png')}></img></Flex>
                </Flex>

                {/* //轮播图 */}
                <Carousel
                    autoplay={false}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require(`../../assets/imgs/${val}`)}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        </a>
                    ))}
                </Carousel>

                {/* 宫格列表 */}
                <Grid data={data} isCarousel onClick={_el => console.log(_el)} />

                {/* 猜你喜欢 */}
                {
                    houseList.map((item, key) => {
                        return (
                            // <Flex style={{ background: '#fff', marginBottom: 10, paddingRight: 10 }} key={item.id}>
                            //     <img style={{ width: 100, height: 100 }} src={item.pic}/>
                            //     <div style={{ flex: 1, marginLeft: 10 }}>
                            //         <div style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</div>
                            //         <Flex justify="between">
                            //             <div>{item.address}</div>
                            //             <div style={{ color: 'red' }}>{item.price}/平米</div>
                            //         </Flex>

                            //     </div>
                            // </Flex>
                            <HouseListItem item={item} key={item.id} onClick={this.clickHouse} />
                        )
                    })
                }

            </div>
        )
    }
}
export default connect()(withRouter(Home)) 