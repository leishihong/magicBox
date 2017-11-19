import Cookies from 'js-cookie'
let globals = {
  mockEnv: 'test',
  version: '1.0', // 版本号
  unifiedUserHost: 'https://newuat-oauth2.health.ikang.com', // 统一登录
  payment: 'http://newuat.paynew.ikang.com/', // 统一支付
  host: 'http://192.168.98.75:7777/servicev1/', // 接口地址
  domain: '',
  authorization: 'Basic MGQzZDNmNjgtNjhhNC00OTdhLTgyZDMtYTY5OTdjNzhhMGQ3OjcyOTRmNjQ0LWU4MWEtNGFlZC05YTVlLWMzNzA0NzAzY2ZkNw==',
  hostServe: {
    test: 'http://192.168.98.75:7777/service/v1/', // 测试
    // test: 'http://192.168.98.104/appService/',
    // test: 'http://192.168.99.60:8090/appService/',
    uat: 'https://newuat-ikapp.health.ikang.com/appService/', //  远程服务器体检宝UAT 环境
    pre: 'https://pre-ikapp.health.ikang.com/appService/',
    prod: 'https://ikapp.health.ikang.com/appService/' //  远程服务器体检宝prod 环境
  },
  domainServe: {
    test: '.ikang.com',
    uat: '.ikang.com',
    pre: '.ikang.com',
    prod: '.ikang.com'
  },
  cookieProp: {path: '/'},
  origin: '',
  loginCall: function (afterLoginTarget) {
    var newPath = afterLoginTarget
    window.sessionStorage.clear()
    Cookies.remove('access_token', {domain: globals.domain, path: '/'})
    Cookies.remove('hrplatform')
    Cookies.set('afterLoginTarget', newPath)
    window.location.href = '/es/Login'
  },
  Reg: {
    verifyMobile: /(^(13\d|15[^4\D]|17[13678]|18\d)\d{8}|170[^346\D]\d{7})$/,
    verifyIdno: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  },
  interface () {
    let nowHostValue = window.location.hostname
    let preIndex = nowHostValue.indexOf('.')
    let preHostName = nowHostValue.substring(0, preIndex)
    if (nowHostValue === 'localhost' || nowHostValue.indexOf('192.168.') > -1 || nowHostValue.indexOf('172.16.') > -1 || nowHostValue === 'ite.my.ikang.com') {
      let mockEnv = globals.mockEnv
      globals.host = globals.hostServe[mockEnv]
      console.log(globals.hostServe[mockEnv])
      globals.domain = ''
    } else if (preHostName === 'new' || preHostName === 'my') {
      globals.host = globals.hostServe['prod']
      globals.domain = globals.domainServe['prod']
    } else {
      globals.host = globals.hostServe[preHostName]
      globals.domain = globals.domainServe[preHostName]
    }
  }
}
export default globals
