import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super(props);
    this.changeData = this.changeData.bind(this)
    this.state = {
      msg: 'hello world'
    }
  }

changeData () {
  this.setState({
    msg: 'hello react'
  })
}
  /**
   * <button onClick = { function (e) {return this.btnClickFn(e) } }>react按钮</button>
   */
  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { this.changeData }>修改</button>
      </div>
    )
  }
}

export default Com;
