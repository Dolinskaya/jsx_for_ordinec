import React, {Component} from "react";
import {Login} from '../../components/Login/Login.js';
import {loginActions} from '../../components/Actions/loginActions';
import {Link} from 'react-router';
import { Menu } from '../../components/Menu/Menu.js';
const styles = require("./Cabinet.scss");

class Cabinet extends React.Component {
	render() {

		return (
			   <div className="importMenu">
        					<Menu />
        				</div>
		);
	}
}

export default Cabinet;	