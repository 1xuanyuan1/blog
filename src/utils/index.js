import Vue from 'vue'
// store.js 是一个兼容所有浏览器的 LocalStorage 包装器，不需要借助 Cookie 或者 Flash。store.js 会根据浏览器自动选择使用 localStorage、globalStorage 或者 userData 来实现本地存储功能。
import ls from 'store2'

export const inBrowser = typeof window !== 'undefined'

export const ua = () => {
  const userAgentInfo = inBrowser ? navigator.userAgent : ''
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod']
  let flag = 'PC'
  for (let vv = 0; vv < Agents.length; vv++) {
    if (userAgentInfo.indexOf(Agents[vv]) > 0) {
      flag = Agents[vv]
      break
    }
  }
  return flag
}

export const ssp = path => {
  if (!inBrowser) return
  const clientHeight = document.documentElement.clientHeight
  const scrollTop = ls.get(path)
  if (scrollTop) {
    Vue.nextTick().then(() => {
      if (document.body.clientHeight >= scrollTop + clientHeight) {
        window.scrollTo(0, scrollTop)
      }
      ls.remove(path)
    })
  }
}

export const strlen = str => {
  let charCode = -1
  const len = str.length
  let realLength = 0
  for (let i = 0; i < len; i++) {
    charCode = str.charCodeAt(i)
    if (charCode >= 0 && charCode <= 128) realLength += 1
    else realLength += 2
  }
  return realLength
}
