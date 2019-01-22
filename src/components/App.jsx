import React from 'react';
// import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      response: ''
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var url = 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting';
    var data = {
      name: this.state.name,
      message: this.state.message
    }
    $.ajax({
      type: 'POST',
      url: url,
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          response: data
        });
      },
      error: function(error) {
        console.error('failed to submit', error);
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Server Response:</h2>
          <div>{this.state.response}</div>
        <h2>Please Input Name and Message</h2>
          <div>
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
          </div>
      </div>
    );
  }
}

export default App;