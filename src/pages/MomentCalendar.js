import React, { Component } from 'react';
import moment from 'moment';
import MaterialUIPickers from '../components/forms/MomentTest';
import { values } from 'lodash';
class Moment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        date1: new Date(),
        date2: new Date(),
        different:''
      },
    };
  }
  
  countRemain = (values) => {
    const  different = moment(values.date2).diff(moment(values.date1),'days');
    this.setState({ different: different})
  };
  render() {
    const {  } = this.props;
    const { initialValues } = this.state;
    return (
      <div>
        <MaterialUIPickers initialValues = {initialValues}
                           getFormValue={values=>this.countRemain(values)}/>
        <p>Difference is {this.state. different} </p>
      </div>
    );
  }
}
export default Moment;
