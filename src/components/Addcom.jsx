import React from 'react';
import '../styles/addcom.css'
function AddCom() {
  return (
    <div className="container mt-5">
      <div className="card custom-card">
        <div className="card-body">
          <h2 className="card-title">Create your community</h2>
          <form>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Community Name</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter the name of your community" />
            </div>
            <div className="input-group mb-3">
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="inputGroupFile02" />
                <label className="custom-file-label" htmlFor="inputGroupFile02">Choose banner for your community</label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text" id="">Upload</span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Description</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Describe your community" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCom;
