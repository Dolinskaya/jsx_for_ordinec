
import React, { Component } from 'react';
import axios from 'axios';
import Uri from 'jsuri';
import setAuthorizationToken from '../../utils/setAuthorizationToken.js';
import {
  LOGIN_REQUEST,
  LOGIN_FAIL, //eslint-disable-line no-unused-vars
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../../constants/User.js';
import {
  ROUTING
} from '../../constants/Routing.js';


class InterceptorUtil {
  constuctor() {
    this.interceptor = null;
  }

  setInterceptor(interceptor) {
    this.interceptor = interceptor;
  }

  getInterceptor() {
    return this.interceptor;
  }
}

export default new InterceptorUtil;


 export function login(payload) {
   return (dispatch) => {

     dispatch({
       type: LOGIN_REQUEST
     })

     setTimeout(() => {
       dispatch({
         type: LOGIN_SUCCESS,
         payload: {
           name: payload.name,
           isAuthenticated: true
         }
       })
       dispatch({
         type: ROUTING,
         payload: {
           method: 'push',
           nextUrl: '/main'
         }
       })
           }, 3300)
   }
 }

 export function logout() {
   return {
     type: LOGOUT_SUCCESS
   }
 }


export function loginActions(data) {
	return dispatch => {
		 return axios.post('https://auth2.ordinec.ru/oauth2/token', data)
		 .then( res => {
      if (res.status === 200){
        const token = res.data.access_token;
        const refreshToken = res.data.refresh_token;
        console.log(token);
        localStorage.setItem('accessToken', token);
        localStorage.setItem('refreshToken', refreshToken);
        setAuthorizationToken(token);
        dispatch(login(token));

      }

		 });
     // .then( err => {
     //    if (err.status === 401 && err.data.error_description === 'The access token provided has expired.') {
     //       localStorage.removeItem('accessToken');
     //      dispatch(axios.post('https://auth2.ordinec.ru/oauth2/token', grant_type=='refresh_token', data))
     //    };

     // });

}
}


// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {

//   const originalRequest = error.config;

//   if (error.response.status === 401 && !originalRequest._retry) {

//     originalRequest._retry = true;

//     const refreshToken = window.localStorage.getItem('refreshToken');
//     return axios.post('https://auth2.ordinec.ru/oauth2/token', { refreshToken })
//       .then(({data}) => {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('refreshToken', data.refreshToken);
//         return axios(originalRequest);
//       });
//   }

//   return Promise.reject(error);
// });