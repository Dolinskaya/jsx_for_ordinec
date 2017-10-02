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

       dispatch({
         type: SEND_FORM_SUCCESS,
         payload: {
           name: payload.name,
         }
       })
       dispatch({
         type: SEND_FORM_FAIL,
        ...state
       })
   }
 }

export function formActions(data) {
  return dispatch => {
     return 
      axios.post('https://webmaster-api.ordinec.ru/v1/users', data)
     .then( res => {
      console.log('Форма отправлена!');
      dispatch(form())
      // const token = res.data.access_token;
      // console.log(token);
      // setAuthorizationToken(token);
      // dispatch(login(token));

     });
  }
}

