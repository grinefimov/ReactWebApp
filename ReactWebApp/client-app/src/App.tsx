import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Items } from './components/Items';
import { NewItem } from './components/NewItem';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/items' component={Items} />
        <Route path='/items/new' component={NewItem} />
      </Layout>
    );
  }
}