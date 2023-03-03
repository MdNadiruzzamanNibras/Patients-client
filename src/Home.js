import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <div >
          <div className='d-flex justify-content-center'>
          <Card style={{ width: '24rem', marginTop:"200px" }}>
      <Card.Body>
        <form >
        <div className="mb-2">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Patient Name"/>
</div>
        <div className="mb-2">
  <label for="exampleFormControlInput1" className="form-label">Contact Details</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Contact Details"/>
</div>
        <div className="mb-2">
  <label for="exampleFormControlInput1" className="form-label">Address</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address"/>
</div>
        <div className="mb-2">
  <label for="exampleFormControlInput1" className="form-label">Pincode</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="pincode"/>
</div>
        </form>
      </Card.Body>
    </Card>
          </div>
        </div>
    );
};

export default Home;