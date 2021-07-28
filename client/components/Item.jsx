import React from 'react'
import { Link}  from 'react-router-dom'

import { deleteItem } from '../api'

class Item extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errorMessage: '',
    }
  }

  componentDidMount () {
    const id = this.props.item.id || this.props.match.params.id
    if (id) { 
        // Render join of tables once new table entered
    }
  }

  removeItem = (e) => {
    // e.preventDefault()
    console.log("Item removeItem:", JSON.stringify(this.props.item, null,2))
    deleteItem(this.props.item.id)
      .then(this.props.fetchItems)
      .then(() => this.props.history.push(`/`))
      .catch(err => this.setState({errorMessage: err.message}))
  }

  render () {
    const {id, item} = this.props.item
    return (
      <div className='item'>
          <Link to={`/api/v1/items/${id}`}>
          <header className='item-header'>
          <h2 className='item-name'>{item}</h2>
          </header></Link>

        <div className='pure-button-group' role='group'>
          <Link to={`/api/v1/items/edit/${id}`}>
            <button className='button-secondary pure-button'>Edit</button>
          </Link>
          <button
            className='button-error pure-button'
            onClick={this.removeItem}>
            Delete
          </button>
        </div>
        {this.state.errorMessage && this.state.errorMessage}
      </div>
    )
  }
}

Item.defaultProps = {
    item: {
      id: null,
      item: ''
    }
  }

export default Item
