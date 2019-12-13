import React from 'react';
import SmurfCard from './SmurfCard';
import Loader from 'react-loader-spinner';

// redux stuff
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

const SmurfList = props => {
  // console.log(props)
  return (
    <div>
      {props.isFetching && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      )}
      {props.smurf.map(sm => <SmurfCard key={sm.id} name={sm.name} age={sm.age} height={sm.height} />)}
      <button onClick={props.getSmurf}>Get Smurf!</button>
      <br />
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

export default connect(mapStateToProps, { getSmurf })(SmurfList);