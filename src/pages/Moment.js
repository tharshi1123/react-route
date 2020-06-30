import moment from 'moment';
import React, { Component, PropTypes } from 'react';

export default class Moment extends Component {
  static propTypes = {
};

  static defaultProps = {
    format: 'MMMM Do YYYY, h:mm a',
    liveUpdate: true,
  };

  componentDidMount() {
    const { liveUpdate, liveUpdateInterval } = this.props;

    if (liveUpdate || liveUpdateInterval) {
      const interval = liveUpdateInterval || 10000;
      this.interval = setInterval(() => this.forceUpdate(), interval);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { date, children, format, ...rest } = this.props;

    return (
      <div {...rest}>
        {children ?
            children(moment(date))
          :
            moment(date).format(format)
        }
      </div>
    );
  }
}
