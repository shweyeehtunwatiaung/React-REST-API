import React from 'react'

const DeleteContact = (props) => {

const {id} = props.location.state.contact
  return (
    <div>
      <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <div className="card-title" style={{ display: "flex" }} >
              
                <h5>Are You Sure to Delete?</h5>
              
              </div>
              
              {/* <button className="btn btn-danger my-3" onClick={() => props.deleteContact(id)}>Delete</button> */}
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default DeleteContact
