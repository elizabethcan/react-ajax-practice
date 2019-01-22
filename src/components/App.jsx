var React = require('react');
var ReactDOM = require('react-dom');

class FormFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: ''
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('submit clicked');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
          <input type="text" name={this.state.name} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          Message:
          <input type="text" message={this.state.message} onChange={this.handleChange.bind(this)} />
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
        <FormFields />
      </div>
  </div>
);

export default App;