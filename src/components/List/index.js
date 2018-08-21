import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class List extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })),
    loading: PropTypes.bool,
    fetchItems: PropTypes.func.isRequired,
  }

  static defaultProps = {
    loading: false,
    items: [],
  }

  componentDidMount() {
    const { fetchItems } = this.props;
    this.refs.list.addEventListener('scroll', this.onScroll);
    fetchItems();
  }

  componentWillUnmount() {
    this.refs.list.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const { fetchItems, loading } = this.props;

    if (loading) {
      return;
    }

    const scrolled = this.refs.list.scrollTop + this.refs.list.clientHeight;
    const total = this.refs.list.scrollHeight;
    const offset = 50;

    if (scrolled >= total - offset) {
      fetchItems();
    }
  }

  render() {
    const { loading, items } = this.props;
    return (
      <div className={styles.list} ref="list">
        { items.map((item) => (
            <div key={item.id} className={styles.item}>
              { item.title }
            </div>
          ))
        }

        { loading && <div className={styles.loading}>Loading</div> }

        { !loading && !items.length && <div className={styles.empty}>Empty</div> }
      </div>
    );
  }
}

export default List;
