import React, { Component } from 'react';
import logo from './airplane.svg';
import './App.css';
import {Button, Input} from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import {submitAllSearchs} from './service/search-service';

class App extends Component {
  constructor(props){
    super(props)
    moment.locale('es');
    this.state = {
      departureDate:  moment()
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date){
    console.info(date);
    this.setState({
      departureDate: date
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Desvolar.com</h2>
          <div className="searchContent">
            <div className="searchField">
              <label>Origen</label>
              <Input placeholder="Ciudad origen..."></Input>
            </div>
            <div className="searchField">
              <label>Destino</label>
              <Input placeholder="Ciudad destino..."></Input>
            </div>
            <div className="searchField">
              <label>Fecha Ida</label>
              <DatePicker selected={this.state.departureDate} onChange={this.handleChange}/>
            </div>
            <div className="searchField">
              <label>Fecha Regreso</label>
              <DatePicker/>
            </div>
            <div className="searchField">
              <label>Número de pasajeros</label>
              <input type="number" max="20" min="1"></input>
            </div>
            <div className="searchButton">
              <Button>Buscar</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  search(filters) {
    submitAllSearchs(filters);
  }
}

export default App;
