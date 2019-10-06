import React, { Component } from 'react';
import { Link } from 'react-router-dom';


interface Item {
  id: number;
  data1: string;
  data2: string;
}

interface ItemsState {
  loading: boolean;
  items: Item[];
}

export class Items extends Component<{}, ItemsState> {
  static displayName = Items.name;

  constructor(props: any) {
    super(props);
    this.state = { items: [], loading: true };
  }

  componentDidMount() {
    this.populateItemsData();
  }

  static renderForecastsTable(items: Item[]) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
        <tr>
          <th>ID</th>
          <th>Data 1</th>
          <th>Data 2</th>
        </tr>
        </thead>
        <tbody>
        {items.map((item: Item) =>
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.data1}</td>
            <td>{item.data2}</td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p>
          <em>Loading...</em>
        </p>
      : Items.renderForecastsTable(this.state.items);

    return (
      <div>
        <h1 id="tabelLabel">Items</h1>
        <Link className="btn btn-primary text-light mb-2" to="/">New Item</Link>
        {contents}
      </div>
    );
  }

  async populateItemsData() {
    const response = await fetch('api/items');
    const data = await response.json();
    this.setState({ items: data, loading: false });
  }
}