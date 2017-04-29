// DATA
// Data is being retrieved from data.js
// In a real application this data shoul be called from the server or API
var userData = userData();
var appointmentsData = appointmentsData();

// COMPONENTS
// Index is the main page
class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Welcome user={userData}/>
        <hr/>
        <DataList title='Appointments' listElement='ListElementAppointment' data={appointmentsData}/>
      </div>
    );
  }
}

// Welcome, the component with the profile image and greetings
class Welcome extends React.Component {
  render () {
    return (
      <div className='panel panel-default'>
        <div className='panel-body'>
          <div className='media'>
            <div className="media-left">
              <img src={this.props.user.avatarUrl} alt='Profile photo' className="media-object welcome__image"/>
            </div>
            <div className="media-body">
              <h4>
                Welcome {this.props.user.name}, hope you are doing fine.
              </h4>
              <hr/>
              <div>
                <a className='btn btn-default' href="#" role="button">
                  Schedule an appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Data list is a container wich accepts title, data
// The idea was to use any kind of Component and Any kind of data, but that'll be for later
class DataList extends React.Component {
  render() {
    // Results doesn't have a key so used index instead, but not recommended
    const appointmentsElement = this.props.data.map((appointment, index) =>
      // I could not use appointment data directly so I had to make it this way... sure there is a better way
      React.createElement(ListElementAppointment, {key: index, start: appointment.start, doctor: appointment.physician_name, symptoms: appointment.symptoms, details: appointment.details}, null)
    );

    return (
      <div className='row'>
        <div className='col-xs-12'>
          <div className='panel panel-primary'>
            <div className='panel-heading'>
              <div className='row'>
                <div className='col-xs-8'>
                  <h4>{this.props.title}</h4>
                </div>
                <div className='col-xs-4 text-right'>
                  <a className='btn btn-default' href="#" role="button">
                    + New appointment
                  </a>
                </div>
              </div>
            </div>
            <div className='panel-body'>
              <ul className='list-group'>
                {appointmentsElement}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// List Element Appointment is a single appointment
class ListElementAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.startDate = new Date(this.props.start);
    this.state = {isToggleOn: false};

    // Handlers
    this.handleClick = this.handleClick.bind(this);
  }
  formatNumber(number, plus = 0) {
    return ('0' + (number + plus)).slice(-2);
  }
  getDate() {
    return this.startDate.getFullYear() + '-' + this.formatNumber(this.startDate.getMonth(), 1) + '-' + this.formatNumber(this.startDate.getDate());
  }
  getTime() {
    return this.formatNumber(this.startDate.getHours()) + ':' + this.formatNumber(this.startDate.getMinutes());
  }
  handleClick(e) {
    e.preventDefault();

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <li className='list-group-item'>
        <div><b>Date:</b> {this.getDate()} </div>
        <div><b>Time:</b> {this.getTime()} </div>
        <div><b>Doctor:</b> {this.props.doctor} </div>
        <div className={this.state.isToggleOn ? '' : 'hidden'}>
          <div><b>Symptoms:</b> {this.props.symptoms} </div>
          <div><b>Details:</b> {this.props.details} </div>
        </div>
        <div className='text-center'>
          <a href='#' onClick={this.handleClick}>
            Read {this.state.isToggleOn ? 'less' : 'more'}
          </a>
        </div>
      </li>
    );
  }
}

// Appointment button
// TODO: Button to display the create appointment form

// Create Appointment
// TODO: Form to create a new appointment

// Init React render
ReactDOM.render(<Index />, document.getElementById('root'));
