import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {push} from 'react-router-redux';
import Menu from '../../components/Menu/Menu.js';
import setAuthorizationToken from '../../utils/setAuthorizationToken.js';
import { loginActions } from '../../components/Actions/loginActions.js';
import axios from 'axios';

require('./Offers.scss');



var Offer = React.createClass({
  render: function() { 
    return ( 
    	<div className="component_main-table">
					<table className="component_main-table">
						<thead>
							<tr>
								<td style={{width:140}}>Лого</td>
								<td style={{width:360}}>Оффер</td>
								<td style={{width:70}}>Холд</td>
								<td style={{width:90}}>Ставка</td>
								<td style={{width:70}}>ЕРС</td>
								<td style={{width:70}}>CR</td>
								<td style={{width:180}}></td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><img src=""/></td>
								<td>
									<span>Вулкан платинум</span>
									<img src="" className="component_lang"/>
								</td>
								<td>1д.</td>
								<td>1500 руб.</td>
								<td>204.65 руб.</td>
								<td>6.84%</td>
								<td>
									<button className="table_button">Получить ссылку</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
        )
   },
});


export default class Offers extends Component {

	 constructor(){
    super();
   this.state = {showHideSidenav:"hidden"}
    };

   componentDidMount() {
   	function getOffers() {
	  	return axios.get('https://webmaster-api.ordinec.ru/v1/offers', 'Bearer ' + token).then(res => {
	   		console.log(res.data);
	   	});
   		
   	}
    }

  render() {
    return (
     <div className="home">
        <Menu />

      <div className="component_wrapper">
      <div className="component_bg"></div>
		<div className="links_wrapper">
				<Link to="main" className="component_nav">Ордынец/</Link>
				<Link to="offers" className="component_nav">Офферы</Link>
				<h1 className="component_header-title">Офферы</h1>
			</div>
			<div className="component_fields">
				<div className="flex_component">
					<input placeholder="Название" type="text" className="input_name" />
					<div className="flex-item flex-item-main">
						<span>Ставка</span>
						<input type="text" className="component_range" />-
						<input type="text" className="component_range" />
					</div>
					<div className="flex-item">
					<span>EPC(руб.)</span>
						<input type="text" className="component_range" />-
						<input type="text" className="component_range" />
					</div>
					<div className="flex-item">
						<span>По </span>
						<input type="text" className="component_range" />
					<button className="component_apply">Применить</button>
					</div>
				</div>
			</div>
			<div className="component_content">
				<h3 className="component_cat">Категории</h3>
				<div className="cat_wrap flex">
					<a href="" onClick={this.toggleSidenav.bind(this)} className="cat_link">Все</a>
					<a href="" onClick={this.toggleSidenav.bind(this)} className="cat_link">Товары почтой</a>
					<a href="" onClick={this.toggleSidenav.bind(this)} className="cat_link">Онлайн-игры</a>
					<a href="" onClick={this.toggleSidenav.bind(this)} className="cat_link">Интернет-магазины</a>
					<a href="" onClick={this.toggleSidenav.bind(this)} className="cat_link">Знакомства</a>
					<a href="" onClick={this.toggleSidenav.bind(this)} className="cat_link">Для мобильных платформ</a>
					<a href="" onClick={this.toggleSidenav.bind(this)} className="cat_link">Красота и здоровье</a>
					<a href="" onClick={this.toggleSidenav.bind(this)} className="cat_link">Браузерные игры</a>
					<a href="" onClick={this.toggleSidenav.bind(this)} className="cat_link">Инфо-товары</a>
					<a href="" onClick={this.toggleSidenav.bind(this)} className="cat_link">Финансы и кредитование</a>
					<a href="" onClick={this.toggleSidenav.bind(this)} className="cat_link">Клиентские игры</a>
				</div>
				<div className="component_main-table">
					<table className="component_main-table">
						<thead>
							<tr>
								<td style={{width:140}}>Лого</td>
								<td style={{width:360}}>Оффер</td>
								<td style={{width:70}}>Холд</td>
								<td style={{width:90}}>Ставка</td>
								<td style={{width:70}}>ЕРС</td>
								<td style={{width:70}}>CR</td>
								<td style={{width:180}}></td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><img src=""/></td>
								<td>
									<span>Вулкан платинум</span>
									<img src="" className="component_lang"/>
								</td>
								<td>1д.</td>
								<td>1500 руб.</td>
								<td>204.65 руб.</td>
								<td>6.84%</td>
								<td>
									<button className="table_button">Получить ссылку</button>
								</td>
							</tr>
						</tbody>
					</table>
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
   toggleSidenav() {
    var css = (this.state.showHideSidenav === "hidden") ? "show" : "hidden";
    this.setState({"showHideSidenav":css});
}

}

