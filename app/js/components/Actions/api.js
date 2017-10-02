import React, { Component } from 'react';
import axios from 'axios';
import Uri from 'jsuri';
import setAuthorizationToken from '../../utils/setAuthorizationToken.js';
import {
  SET_FORM,
  SEND_FORM, //eslint-disable-line no-unused-vars
  SEND_FORM_SUCCESS,
  SEND_FORM_FAIL
} from '../../constants/Form.js';

 export function form(payload) {
   return (dispatch) => {

     dispatch({
       type: SEND_FORM
     })

     setTimeout(() => {
       dispatch({
         type: SEND_FORM_SUCCESS,
         payload: {
           name: payload.name,
           isAuthenticated: true
         }
       })
       dispatch({
         type: SEND_FORM_FAIL,
     		...state
       })
           }, 3300)
   }
 }


export function apiActions(endpoint, method, params ={}, headers) {
	const url = 'https://webmaster-api.ordinec.ru/v1';
  return dispatch => {
     return 
      axios.get(url + '/users', token)
     .then( res => {
      console.log('Форма отправлена!');
      dispatch(form())
     });
  }
}