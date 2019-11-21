/* eslint-disable default-case */
import React, { Component } from 'react'
import { TabBar,Carousel } from 'antd-mobile';
import Home from './Home'
import History from './History'
import My from './My'
import Wechant from './Wechant'
import { HashRouter, Switch, Route } from 'react-router-dom'

import { connect } from 'react-redux'



export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "/home",
            tablist: [
                { id: 0, title: "首页", icon: "shouye",url:"/home" },
                { id: 1, title: "历史", icon: "lishi" ,url:"/home/history"},
                { id: 2, title: "微聊", icon: "wechat" ,url:"/home/wechant"},
                { id: 3, title: "我的", icon: "my" ,url:"/home/my"}
            ]
        };

    }
    componentDidMount(){
        let curPath = this.props.location.pathname;
        this.setState({selectedTab:curPath})
    }
    // renderContent(id) {
    //     switch (id) {
    //         case 0:
    //             return <Home></Home>;
    //         case 1:
    //             return <History></History>;
    //         case 2:
    //             return <Wechant></Wechant>;
    //         case 3:
    //             return <My></My>;
    //     }
    // }
    render() {
        let { tablist } = this.state
        return (

            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"  //没选中的字体颜色
                    tintColor="#1afa29"  //选中的字体颜色
                    barTintColor="white"
                >
                    {
                        tablist.map((item) => {
                            return <TabBar.Item
                                title={item.title}
                                key={item.id}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require("../../assets/imgs/" + item.icon + ".png")}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require("../../assets/imgs/" + item.icon + "_s.png")}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                 
                                selected={this.state.selectedTab === item.url}

                                onPress={() => {
                                    this.props.history.push(item.url)
                                    this.setState({
                                        selectedTab: item.url,
                                    });
                                }}
                            >
                                {/* {this.renderContent(item.id)} */}

                                <HashRouter>
                                    <Switch>
                                        <Route path="/home" exact component={Home}></Route>
                                        <Route path="/home/my" component={My}></Route>
                                        <Route path="/home/wechant" component={Wechant}></Route>
                                        <Route path="/home/history" component={History}></Route>
                                    </Switch>
                                </HashRouter>
                            </TabBar.Item>

                        })


                    }

                </TabBar>

            </div>
        )
    }
}
