import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {push} from 'react-router-redux';
import Menu from '../../components/Menu/Menu.js';

require('./Statistics.scss');

export default class Statistics extends Component {
  render() {
    return (
      <div className="home">
        <Menu />
      </div>
    );
  }
}

