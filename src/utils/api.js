
import request from './request'


export const getUser = () => {
  return request.get('/users')
}

export const vcLogin = (data) => {
  return request.cipher('/vc/teller/login',data)
}
