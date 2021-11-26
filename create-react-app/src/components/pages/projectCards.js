import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default function ProjectCards({projects}) {
    return(
<div className="row justify-content-center">
{projects.map((project,i)=> (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project.project.src} />
      <Card.Body key={i}>
        <Card.Title> {`${project.project.title}`}</Card.Title>
        <Card.Text>
          {`${project.project.description}`}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
))}
 </div>
)}