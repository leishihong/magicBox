import Cookies from 'js-cookie'
let globals = {
  mockEnv: 'test',
  version: '1.0', // 版本号
  unifiedUserHost: '', 
  payment: '', 
  host: '', // 接口地址
  domain: '',
  authorization: '',
  hostServe: {
    test: '', // 
    uat: '', // 
    pre: '',
    prod: '' //  
  },
  domainServe: {
    test: ''
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
    if (nowHostValue === 'localhost' || nowHostValue.indexOf('192.168.') > -1 || nowHostValue.indexOf('172.16.') > -1 || nowHostValue === 'ite.my.magic.com') {
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
