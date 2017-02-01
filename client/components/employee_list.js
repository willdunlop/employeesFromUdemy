import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

class EmployeeList extends Component {
  componentWillMount() {
    this.page = 1;
  }

  whenClicked() {
    Meteor.subscribe('employees', PER_PAGE * this.page + 1);
    this.page += 1;
  }

  render() {
    return(
      <div>
        <div className="employee-list">
          {this.props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee} />
          )}
        </div>
        <button onClick ={ this.whenClicked.bind(this) }
          className="btn btn-primary">Load More</button>
      </div>
    );
  };
};

export default createContainer(() => {
  Meteor.subscribe('employees', PER_PAGE);

  //this return becomes the props that is passed through at the top
  return { employees: Employees.find({}).fetch() };
  //only fetches data we have subscribed to

}, EmployeeList);
