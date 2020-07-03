import React, { Component } from "react";
import {isEmpty} from 'lodash';
import moment from 'moment';
import MomentTest from "../components/forms/MomentTest";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmails: [],
    };
  }
  addEmail = (abc) => {
    this.setState((state) => {
      return {
        userEmails: [...state.userEmails, abc.email],
      };
    });
  };
 
 render() {
    const {userEmails} = this.state;
    return (
      <div>
        <MomentTest
          getFormValue={values => this.addEmail(values)}
        />
        {isEmpty(userEmails) && <h1>Select date and time!</h1>}
        {!isEmpty(userEmails) && userEmails.map((item, index) => {
          return (
            <div>
             {item} - {index} 
           </div>
          )
        }) }
      </div>
    );
  }
}
export default Countdown;
