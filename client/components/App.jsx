import React from 'react'

import AppRoutes from './AppRoutes'

import {getItems} from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      errorMessage: ''
    }
    this.fetchItems = this.fetchItems.bind(this)
  }

  componentDidMount () {
    this.fetchItems()
  }

  fetchItems () {
    return getItems()
      .then(items => {
        this.setState({items: items})
      })
      .catch(err => {
        this.setState({errorMessage: err.message})
      })
  }

  render () {
    return (
      <div id='layout' className='pure-g'>
        <div className='content pure-u-1 pure-u-md-3-4'>
          <AppRoutes
            items={this.state.items}
            fetchItems={this.fetchItems}
          />
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>
          }
        </div>
      </div>
    )
  }
}
