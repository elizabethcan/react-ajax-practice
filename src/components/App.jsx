var React = require('react');
var ReactDOM = require('react-dom');

class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

var App = () => (
  <div>
    <h2>Please Input Name and Message</h2>
      <div>
        <FormField />
      </div>
  </div>
);

export default App;