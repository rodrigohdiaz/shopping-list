// Create client portion of api functions
import request from 'superagent'

const itemUrl = 'http://localhost:3000/api/v1/items'

// Create getItems function for api on client components side
export function getItems () {
  return request
    .get(itemUrl)
    .then(response => response.body)
    .catch(errorHandler('GET', '/'))
}

// Create getItem function for api on client components side
export function getItem (itemId) {
  return request.get(`/api/v1/items/${itemId}`)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('GET', '/:id'))
}

// Create addItem function for api on client components side
export function addItem (item) {
  return request.post('/api/v1/items/')
    .send(item)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('POST', '/'))
}

// Create updateItem function for api on client components side
export function updateItem (item) {
  return request.patch(`/api/v1/items/${item.id}`)
    .send(item)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('PATCH', `/items/${item.id}`))
}

// Create deleteItem function for api on client components side
export function deleteItem (itemId) {
  return request.del(`/api/v1/items/${itemId}`)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('DELETE', '/api/v1/items/:id'))
}

// Handle errors in application
function errorHandler (method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: API route for ${method} ${route} ${err.message} missing`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}


