/**
 * Duke 2017年01月06日11:22:21
 */
import user from './userController.js'

module.exports.init = function* (router){
  console.log('init')
  user.init(router)
}
