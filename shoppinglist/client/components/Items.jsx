import React from 'react'
import { Link } from 'react-router-dom'

import Item from './Item'

function Items (props) {
  return (
    <>
        <div className='items'>
        <h1 className='content-subhead'>Items</h1>
        {props.items.map(item => {
            return <Item
            key={item.id}
            item={item}
            fetchItems={props.fetchItems}
            path={props.location.pathname}
            />
        })}
        </div>
        <br></br>
        <br></br>
        <div>
        <Link to={'/api/v1/items/new'}>
            <button className='button-secondary pure-button' >Add New Item</button>
          </Link>
        </div>
    </>
  )
}

Items.defaultProps = {
  items: []
}

export default Items