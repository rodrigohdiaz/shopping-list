import React from 'react'

import { addItem, updateItem } from '../api'

class ItemForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errorMessage: '',
      item: {
        item: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const {item} = this.props
    if (item) this.setNewItem(item)
  }

  componentWillReceiveProps (nextProps) {
    const {item} = nextProps
    if (item && !this.props.item) this.setNewItem(item)
  }

  setNewItem (item) {
    this.setState({
        item: Object.assign({}, item)
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const {item, history, fetchItems} = this.props

    if (item) {
      updateItem(this.state.item)
        .then(fetchItems)
        .then(navigateToItem())
        .catch(err => this.setState({errorMessage: err.message}))
    } else {
      addItem(this.state.item)
        .then(newItem => {
          return fetchItems()
          .then(navigateToItem()) 
        })
        .catch(err => this.setState({errorMessage: err.message}))
    }

    function navigateToItem () {  
      return () => history.push(`/`)
    }
  }

  handleChange (e) {
    const newItem = {
      ...this.state.item,
      [e.target.name]: e.target.value
    }
    
    this.setState({
      item: newItem
    })
  }

  render () {
    return (
      <form className='pure-form pure-form-aligned' onSubmit={this.handleSubmit}>
        {this.props.item
          ? <h2 className='item-name'>Edit Item</h2>
          : <h2 className='item-name'>Add a New Item</h2>
        }

        <fieldset>
          <div className='pure-control-group'>
            <label htmlFor='title-name'>Item</label>
            <input
              type='text'
              name='item'
              value={this.state.item.item}
              onChange={this.handleChange}
            />
          </div>

          <div className='pure-controls'>
            <input className='pure-button' type='submit' />
          </div>
        </fieldset>

        <p>{this.state.errorMessage && this.state.errorMessage}</p>
      </form>
    )
  }
}

export default ItemForm