import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NewItem extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>New Item</h1>
        <Link className="btn btn-secondary text-light" to="/items">Back</Link>
      </div>
    );
  }
}