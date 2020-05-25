import req  from './http.js'

export const LOGIN = params => req('post', '/operator/login', params)

export const LOGOUT =params=>req('post', '/operator/logout', params)