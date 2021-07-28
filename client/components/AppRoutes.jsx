import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Item from './Item'
import Items from './Items'
import ItemForm from './ItemForm'

class Routes extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={props => (
            <Items
              items={this.props.items}
              fetchItems={this.props.fetchItems}
              {...props}
            />
          )} />
          <Route path='/api/v1/items/new' render={(props) => (
            <ItemForm
              fetchItems={this.props.fetchItems}
              {...props}
            />
          )} />
          <Route path='/api/v1/items/edit/:id' render={(props) => (
            <ItemForm
              fetchItems={this.props.fetchItems}
              item={this.props.items.find(item => (
                item.id === Number(props.match.params.id))
              )}
              {...props}
            />
          )} />
          <Route path='/api/v1/items/:id' render={props => (
            <Item
              fetchItems={this.props.fetchItems}
              item={this.props.items.find((item) =>
                item.id === Number(props.match.params.id)
              )}
              {...props}
            />
          )} />
        </Switch>
      </div>
    )
  }
}

export default Routes
