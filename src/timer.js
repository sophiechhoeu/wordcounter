import React from 'react';

// export default (() => (<div>{this.props.timeNow}</div>))

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.timeNow.toString()}</div>
    )
  }
}
