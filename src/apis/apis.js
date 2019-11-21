import axios from 'axios'

//默认浏览地址
axios.defaults.baseURL = 'http://127.0.0.1:8000'

export const getLogin = (params) =>axios.post("/login",params)

//获取猜你喜欢的列表
export const getHouseListApi = () => axios.get('/getHouseList')