import React from 'react';
import Greeting from './greeting';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'john',
    };
  }

  handleNameChange(name) {
    // console.log(e.target.value);
    // this.setState({ name: name }); <- ショートハンドの場合はプロパティを省略できる
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleNameChange(e.target.value)}
        />
        <button onClick={() => this.handleNameChange('Bob')}>I am Bob</button>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
