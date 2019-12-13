import React, { useState } from 'react';

// redux stuff
import { connect } from 'react-redux';
import { postSmurf } from '../actions';

const SmurfForm = props => {

  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: 0,
    height: '0cm'
  })

  const onChange = e => {
    setNewSmurf({
      ...newSmurf, [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    // console.log(newSmurf)
    props.postSmurf(newSmurf);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <h2>Add Smurf: </h2>
          <input
            type='text'
            name='name'
            onChange={onChange}
            placeholder="Enter Name"
          />
          <br />
          <input
            type='text'
            name='age'
            onChange={onChange}
            placeholder="Enter Age"
          />
          <br />
          <input
            type='text'
            name='height'
            onChange={onChange}
            placeholder="Enter Height"
          />
        </div>
        <button type='submit'>ADD</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {

  return {
    smurf: state.smurf,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { postSmurf })(SmurfForm);