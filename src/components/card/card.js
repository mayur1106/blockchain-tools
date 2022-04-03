import React, { Component } from 'react';
import { Button,Card } from 'react-bootstrap';
class CardComponant extends Component {
  render() {
return (  
            <>
            {this.props.features.map((feature,key)=>{
              return (<div className="col-lg-4 col-md-4 m-1" key={key}>
                <Card className="p-3"  key={key}>
                  <Card.Body className="p-3">
                      <Card.Title>{feature.name}</Card.Title>
                      <Card.Text>{feature.description}</Card.Text>
                      <div className="text-right">
                      <Button variant="primary" size="sm" className='m-1' onClick={(event)=>this.props.featureFunctions('network')}>Learn More</Button>
                      <Button variant="primary" size="sm" className='m-1'>Execute</Button>
                      </div>
                  </Card.Body>
                </Card>  
              </div>)
              })}
            </>
)
}
}

export default CardComponant