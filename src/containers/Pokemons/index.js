import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { api } from 'redux/actions';
import { List } from 'components';

class Pokemons extends Component {
  static propTypes = {
    fetchPokemons: PropTypes.func.isRequired,
  }

  state = {
    loading: false,
    items: [],
  }

  generateItems = () => [...new Array(30)].map((val, i) => ({ id: (i + this.state.items.length).toString(), title: `item ${i + this.state.items.length}` }));

  fetchItems = () => {
    const { fetchPokemons } = this.props;

    this.setState({ loading: true });

    fetchPokemons();

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

const mapActionsToProps = ({ fetchPokemons: api.fetchPokemons });

export default connect(null, mapActionsToProps)(Pokemons);
