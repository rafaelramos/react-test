# react-test
Appointment portal using React Redux (test)

## Setup

To run a simple server you can use the following code:

`ruby -run -e httpd . -p 8000`

This will allow you to avoid CORS errors for local files.

Once you have the server running access to:

`http://localhost:8000/app/html/`

There you will find the test app.

## Development

This is simple page to display information. This project covers the following components:

* Index: Index page including Welcome and DataList
* Welcome: Profile picture, welcome message for the user.
* DataList: It accepts Appointments data and renders the corresponding component (this element was supposed to work with any component, but now it only works with ListElementAppointment)
* ListElementAppointment: It accepts appointment data and displays the information, and has the ability to toggle more or less information.
