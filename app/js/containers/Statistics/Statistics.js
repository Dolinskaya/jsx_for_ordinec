import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {push} from 'react-router-redux';
import Menu from '../../components/Menu/Menu.js';

require('./Style.scss');

export default class Statistics extends Component {
  render() {
    return (
<div className="home">
        <Menu />

      <div className="component_wrapper">
      <div className="component_bg"></div>
		<div className="links_wrapper">
				<Link to="main" className="component_nav">Ордынец/</Link>
				<Link to="offers" className="component_nav">Статистика</Link>
				<h1 className="component_header-title">Статистика</h1>
			</div>
			<div className="component_fields">
        <div className="flex_component">
          <button className="component_sort">
          <span>По дате перехода</span>
        {/*  <span>По дате перехода</span>
			 <span>По дате перехода</span>
        */}
          </button>
          <input className="component_datepicker" defaultValue="9.06.2017-23.06.2017"/>
          <div className="component_selects">
          	 <button className="component_sort">
            <span>Страны</span>
          </button>
            <button className="component_sort">
            <span>Устройства</span>
          </button>
            <button className="component_sort">
            <span>Офферы</span>
          </button>
           </div>
           <input className="component_input" placeholder="sub_id" />
           <input className="component_input" placeholder="sub_id2" />
          <button className="component_btn component_btn-img"></button>
          <button className="component_btn">ок</button>
        </div>
      </div>
			<div className="component_content">
				
				<div className="component_table">
					<table className="component_table">
						<thead>
							<tr>
								<td style={{width:157}}><a href="">По дате перехода</a></td>
								<td style={{width:63}}><a href="">Хиты</a></td>
								<td style={{width:68}}><a href="">Клики</a></td>
								<td style={{width:180}}><a href="">Принято (шт./руб.)</a></td>
								<td style={{width:197}}><a href="">Ожидаемо (шт./руб.)</a></td>
								<td style={{width:200}}><a href="">Отклонено (шт./руб.)</a></td>
								<td style={{width:211}}><a href="">Всего лидов (шт./руб.)</a></td>
								<td style={{width:114}}><a href="">Аппрув (%)</a></td>
								<td style={{width:42}}><a href="">CR</a></td>
								<td style={{width:20}}><a href="">EPC</a></td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{width:157}}>По дате перехода</td>
								<td style={{width:63}}>Хиты</td>
								<td style={{width:68}}>Клики</td>
								<td style={{width:180}}>Принято (шт./руб.)</td>
								<td style={{width:197}}>Ожидаемо (шт./руб.)</td>
								<td style={{width:200}}>Отклонено (шт./руб.)</td>
								<td style={{width:211}}>Всего лидов (шт./руб.)</td>
								<td style={{width:114}}>Аппрув (%)</td>
								<td style={{width:42}}>CR</td>
								<td style={{width:20}}>EPC</td>
							</tr>
							<tr>
								<td style={{width:157}}>По дате перехода</td>
								<td style={{width:63}}>Хиты</td>
								<td style={{width:68}}>Клики</td>
								<td style={{width:180}}>Принято (шт./руб.)</td>
								<td style={{width:197}}>Ожидаемо (шт./руб.)</td>
								<td style={{width:200}}>Отклонено (шт./руб.)</td>
								<td style={{width:211}}>Всего лидов (шт./руб.)</td>
								<td style={{width:114}}>Аппрув (%)</td>
								<td style={{width:42}}>CR</td>
								<td style={{width:20}}>EPC</td>
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
}

