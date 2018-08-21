import React, { Component } from 'react';

import { List } from 'components';

class Pokemons extends Component {
  state = {
    loading: false,
    items: [],
  }

  generateItems = () => [...new Array(30)].map((val, i) => ({ id: (i + this.state.items.length).toString(), title: `item ${i + this.state.items.length}` }));

  fetchItems = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      const newItems = this.generateItems();
      this.setState({
        loading: false,
        items: [...this.state.items, ...newItems],
      });
    }, 2000);
  }

  render() {
    const { items, loading } = this.state;

    return (
      <List
        loading={loading}
        items={items}
        fetchItems={this.fetchItems}
      />
    )
  }
}

export default Pokemons;
