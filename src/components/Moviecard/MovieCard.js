import React from 'react'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

import "./Moviecard.css"
function MovieCard  ({movie})  {
  return (
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.image} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">{movie.date}</Card.Link>
    <Card.Link href="#">{movie.type}</Card.Link>
  </Card.Body>
</Card>
  )
}




export default MovieCard

