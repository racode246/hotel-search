import React from 'react';

function Greeting(props) {
  return (<div>Hi {props.name}</div>);
}

Greeting.propTypes = {
  name: React.PropTypes.isRequired,
};

export default Greeting;

