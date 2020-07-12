import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercises extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      phonenumber: "",
      email: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user'
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  onChangePhoneNumber(e) {
    this.setState({
      phonenumber: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phonenumber: this.state.phonenumber,
      email: this.state.email,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise)

    window.location = '/';
  }

  render() {
      return (
        <div>
      <h3>Create New Appointment With A Barber</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label> {/* maybe change username to barber? */}
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
      <div className="f_lName">
        <div className="form-group">
          <label>First Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangeFirstName}
              />
        </div>
        <div className="form-group">
          <label>Last Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastName}
              />
        </div>
      </div>
      <div className="f_lName">
        <div className="form-group">
          <label>Mobile Number: </label>
          <input  type="number"
              required
              className="form-control"
              value={this.state.phonenumber}
              onChange={this.onChangePhoneNumber}
              />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input  type="email"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
      </div>
        <div className="form-group">
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
      )
    }
}