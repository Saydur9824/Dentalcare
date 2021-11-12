import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import mapImg from '../../images/bannner/map.gif'
import './News.css'

const News = () => {
    return (
        <div> 
            <Container className = 'map-style'>
                <h1 className = 'name-style mb-3'>SEND US A MESSAGE</h1>
                <hr />
            <Row>
                <p className ='mb-5'>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital.</p>
                <Col >
            <form className ="row g-3 mt-3">
                <div className ="col-md-4">
                    <label for="validationDefault01" className ="form-label">First name</label>
                    <input type="text" className ="form-control" id="validationDefault01" value="First name" required/>
                </div>
                <div className ="col-md-4">
                    <label for="validationDefault02" className ="form-label">Last name</label>
                    <input type="text" className ="form-control" id="validationDefault02" value="Last name" required/>
                </div>
                <div className ="col-md-4">
                    <label for="validationDefaultUsername" className ="form-label">Username</label>
                    <div className ="input-group">
                    <span className ="input-group-text" id="inputGroupPrepend2">@</span>
                    <input type="text" className ="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
                    </div>
                </div>
                <div className ="col-md-6">
                    <label for="validationDefault03" className ="form-label">City</label>
                    <input type="text" className ="form-control" id="validationDefault03" required/>
                </div>
                <div className ="col-md-3">
                    <label for="validationDefault04" className ="form-label">State</label>
                    <select className ="form-select" id="validationDefault04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div className ="col-md-3">
                    <label for="validationDefault05" className ="form-label">Zip</label>
                    <input type="text" className ="form-control" id="validationDefault05" required/>
                </div>
                <div className ="col-12">
                    <div className ="form-check">
                    <input className ="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                   
                    </div>
                </div>
                <div className ="col-12">
                    <button className ="btn btn-primary mt-3" type="submit">Submit</button>
                </div>
                </form>
              
          </Col>
          <Col>
            <img src={mapImg} alt="" />
          </Col>
       </Row>
            </Container>
            
        </div>
    );
};

export default News;