import React, { Component } from 'react';
import axios from 'axios';
import DonutSpinner from '../components/DonutSpinner';

class Inventory extends Component {
  state = {
    inventory: [],
  };

  componentDidMount() {
    axios
      .get(`/api/v1/inventories`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          inventory: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { inventory } = this.state;

    return (
      <div className="App">
        <h1>Inventory</h1>
        {inventory.length ? (
          <ul>
            {inventory.map((item) => (
              <li key={item.id}>
                <h3>{item.item_name}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <DonutSpinner />
        )}
      </div>
    );
  }
}

export default Inventory;
