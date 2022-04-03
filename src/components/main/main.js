import React, { Component } from 'react';
import { Card ,Button} from 'react-bootstrap';
import CardComponant from '../card/card';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
 

  render() {
    return (
        <div className='container mt-5 p-2'>
          <div className='row'>
            <main role="main" className="col-lg-12 d-flex">
                <div className="row-fluid mt-5">
                    <h2>Blockchain Tools</h2>
                        <div className="row ">
                        {this.props.features.map((feature,key)=>{
                          return (<div className="col-lg-4 col-md-4 mt-2" key={key}>
                            <Card className="p-3"  key={key}>
                              <Card.Body className="p-3">
                                  <Card.Title>{feature.name}</Card.Title>
                                  <Card.Text>{feature.description}</Card.Text>
                                  <div className="text-right">
                                  <Button variant="primary" size="sm" className='m-1' >Learn More</Button>
                                  <Button variant="primary" size="sm" className='m-1' onClick={(event)=>this.props.featureFunctions(feature.callbackFunction)}>Get Code</Button>
                                  </div>
                              </Card.Body>
                            </Card>  
                          </div>)
                          })
                        }
                         </div>
                       
                </div>
            </main>
          </div>
        </div>
    );
  }
}

export default Main;
