import React from 'react';
import Greeting from './greeting';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'john',
    };
  }

  handleMouseOver() {
    this.setState({ name: 'Bob' });
  }

  handleMouseOut() {
    this.setState({ name: 'Mike' });
  }

  render() {
    return (
      <div
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
      >
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
