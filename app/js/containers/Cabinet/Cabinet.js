import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {push} from 'react-router-redux';
import Menu from '../../components/Menu/Menu.js';

require('./Cabinet.scss');


export default class Cabinet extends Component {

  render() {
    return (
     <div className="home">
        <Menu />

      <div className="component_wrapper">
      <div className="component_bg"></div>
		<div className="links_wrapper">
				<Link to="main" className="component_nav">Ордынец/</Link>
				<Link to="offers" className="component_nav">Настройки/</Link>
				<Link to="offers" className="component_nav">Личный кабинет</Link>
				<h1 className="component_header-title">Личный кабинет</h1>
			</div>
			<div className="component_fields">
				<p className="cabinet_title">Персональные данные</p>
			</div>
			<div className="component_content">
				<h3 className="component_cat">Смена пароля</h3>
				<div className="component_labels-group">
						<label htmlFor="old_password">Старый пароль</label>
						<label htmlFor="new_password">Новый пароль</label>
						<label htmlFor="repeat_password">Повторите новый</label>
					</div>
				<div className="cat_wrap cabinet-cat_wrap clearfix">
					<input id="new_password" type="password" className="cabinet_field cabinet_content"/>
					<input id="repeat_password" type="password" className="cabinet_field cabinet_content"/>
					<input id="old_password" type="password" className="cabinet_field cabinet_content"/>
					<button className="component_apply btn">Изменить</button>
				</div>
				<h3 className="component_cat">Контактные данные</h3>
					<div className="component_labels-group">
						<label htmlFor="name">Имя</label>
						<label htmlFor="skype">Skype</label>
						<label htmlFor="number">Моб. телефон</label>
					</div>
						<label className="item_label" htmlFor="repeat_password">E-mail</label>
				<div className="cat_wrap cabinet-cat_wrap clearfix">
					<input id="name" type="text" className="cabinet_field cabinet_content"/>
					<input id="skype" type="text" className="cabinet_field cabinet_content"/>
					<input id="number" type="text" className="cabinet_field cabinet_content"/>
					<input id="email" type="email" className="cabinet_field cabinet_content" disabled/>
				</div>
				<div className="cabinet_wrap-btn">
					<button className="component_apply save-btn">Сохранить</button>
					<button className="component_apply setting-btn">Настроить оповещения</button>
				</div>
				<div className="component_fields  cabinet_title-finance">
				<p className="cabinet_title">Финансы</p>
			</div>
			<table className="data-table data-table-lk-main">
				<thead>
					<tr>
						<th>Система</th>
						<th>Номер счета</th>
						<th>Примечание</th>
					</tr>
				</thead>
				<tbody><tr><td>Qiwi</td><td>+380939774438</td><td>Нет примечания</td></tr><tr><td>WMR</td><td>R406839405697</td><td>Нет примечания</td></tr></tbody>
			</table>
			<div className="component_labels-bottom-group">
			<label htmlFor="number-wallet">Номер кошелька</label>
			<label htmlFor="wallet">Кошелек</label>
			</div>
			<div className="cat_wrap cabinet-cat_wrap clearfix">
			<input id="number-wallet" type="text" className="cabinet_field cabinet_content"/>
			<input id="wallet" type="text" className="cabinet_field cabinet_content"/>
			<button className="component_apply add-wallet">Добавить кошелек</button>
			</div>
				<div className="paginator">
				<div className="paginator_wrap">
					<a href="" className="paginator_entry">В начало</a>
					<a href="" className="paginator_prev"> </a>
					<span className="paginator_current">1</span>
					<a href="" className="paginator_next"> </a>
					<a href="" className="paginator_end">В конец</a>

				</div>
				</div>
			</div>
		</div>
      </div>
    );
  }
}

