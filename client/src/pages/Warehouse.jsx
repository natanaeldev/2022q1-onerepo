import React, { Component } from 'react';
import axios from 'axios';
import DonutSpinner from '../components/DonutSpinner';

class Warehouse extends Component {
  state = {
    warehouses: [],
  };

  componentDidMount() {
    axios
      .get(`/api/v1/warehouses`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          warehouses: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { warehouses } = this.state;

    return (
      <div className="App">
        <h1>Warehouses</h1>
        {warehouses.length ? (
          <ul>
            {warehouses.map((warehouse) => (
              <li key={warehouse.id}>{warehouse.name}</li>
            ))}
          </ul>
        ) : (
          <DonutSpinner />
        )}
      </div>
    );
  }
}

export default Warehouse;
