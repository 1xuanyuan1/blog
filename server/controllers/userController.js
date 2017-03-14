import User from '../models/userModel.js'

module.exports.init = router => {
  router.get('/getUser', getUser)
  router.post('/registerUser', registerUser)
}
//获取用户
const getUser = async (ctx, next) => {
    ctx.body = {
        username: '阿，希爸',
        age: 30
    }
}

//用户注册
const registerUser = async (ctx, next) => {
    console.log('registerUser', ctx.request.body);
}
