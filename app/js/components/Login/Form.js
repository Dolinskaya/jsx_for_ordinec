
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'react-router';
import { bindActionCreators } from 'redux';
import { formActions } from '../Actions/formActions.js';
require('./Form.scss');



// @connect(
//     state => ({
     
//       form: state.formActions.form,
//       formSent: state.formActions.formSent
//     }),{
//       setForm: formActions.setForm,
//       sendForm: formActions.sendForm,
//     })

 class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          form: {
          email: '',
          password: '',
          name: '',
          repeatPassword: '',
  },

          formSent: false,
       };
    this.handleFormChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleSubmit.bind(this);

}

 handleSubmit(event) {
    event.preventDefault();

  //  console.log(this.setState);
    // this.setState( {formSent: true});
    this.props.formActions()
}
 handleChange(event) {
    //this.setState({[event.target.name]: event.target.value });
  }
  render() {
        return (
          <div>        
         <form  id="registration" onSubmit={this.handleSubmit} >
        <div className="wrap-two-input">
        <input className="Logout" onChange={this.handleChange} name="email" ref="email" placeholder="E-mail" type="email" />
        *<input  className="Logout" onChange={this.handleChange} name="password" ref="password" placeholder="Пароль" type="password" />
        </div>
        <div className="wrap-two-input">
        <input className="Logout bottom"  onChange={this.handleChange} name="username" ref="username" placeholder="Логин" type="text" />
        <input  className="Logout bottom" onChange={this.handleChange} name="repeatpassword"  ref="repeatpassword" placeholder="Повторите пароль" type="password" />
        </div>
        <input className="UserAgreement" name="UserAgreement" ref="checkbox" value="
UserAgreement" type="checkbox" />
        <span className="rem-me">Пользовательское соглашение</span>
          <button className="btn__registration">Зарегистрироваться</button>
          <img className="btn-preloader-img" src="./homeimgcss/loader.gif" alt=""/>
         </form>
      </div>
      );
  }
}


function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(formActions, dispatch)
  }
}

// Login.propTypes = {
//   loginActions: React.PropTypes.func.isRequired
// }

// Login.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

export default connect(null, {formActions}) (Form);
