/**
 *  配置axios
 *  更多axios相关信息请查询：
 *  http://www.axios-js.com/zh-cn/docs/
 */
import axios from 'axios';
import CryptoJS, {
  random32Word,
  sha1Encrypt,
  getAesStr,
  getAesDecrypt
} from './encrypt';
import { get as getStore } from './store';

const BASE_API_URL = '';
const REQURST_TIME_OUT = 20000;

const instance = axios.create({
  baseURL: BASE_API_URL,
  timeout: REQURST_TIME_OUT,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

//全局拦截-请求拦截器
instance.interceptors.request.use(
  (config) => {
    console.log('config==>', config);
    return config;
  },
  (error) => {
    console.log('error==>', error);

    return Promise.error(error);
  }
);

//全局拦截-响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 根据状态码做对应的处理
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

//扩展axios处理下加密解密
instance.cipher = (url, data) => {
  let stime = Date.now();
  let nonce = random32Word();
  let sign = sha1Encrypt('token' + stime + nonce);
  const refreshtoken = getStore('refreshToken');

  data.refreshtoken = refreshtoken || '';

  console.warn('1111', stime, nonce, sign);
  console.warn('net info 原始==>(' + url + ')' + JSON.stringify(data));

  let padding, key;
  if (data.isEncode) {
    key = nonce;
    padding = nonce.substring(0, 16);
    const reqData = getAesStr(JSON.stringify(data), key, padding); // AES

    const base64ReqData = CryptoJS.enc.Base64.stringify(
      CryptoJS.enc.Hex.parse(reqData)
    );

    data ='data='+encodeURIComponent(base64ReqData);
  }
  console.warn('net info 加密==>(' + url + ')' + data);
  return new Promise((resolve, reject) => {
    instance({
      method: 'POST',
      headers: {
        Accept: 'application/json',
        nonce,
        stime: stime,
        sign: sign,
        Language: 'zh-Hans' //TODO 演示时候先写死
      },
      data,
      url
    })
      .then((response) => {
        const ret = response.data;
        if (url === '/vc/teller/login') {
          if (ret.errcode != '0') {
            reject(ret.errMsg);
          }
          const ret_ase = JSON.parse(
            getAesDecrypt(ret.loginInfo, key, padding)
          );
          resolve(ret_ase);
        } else if (ret.errcode == '0') {
          resolve(ret);
        } else {
          reject(ret.errMsg);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default instance;
