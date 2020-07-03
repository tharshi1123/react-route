import React, { Component } from 'react';
import moment from 'moment';
import MomentTest from '../components/forms/MomentTest';

class Moment extends Component {
    constructor(props) {
        super(props);
        this.state = {
         }
    }
    render(props) {
        return (
            <div>
                    <MomentTest
                    />
            </div>
         );
    }
}

export default Moment;
