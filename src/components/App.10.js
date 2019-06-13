import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      msg: 'hello world'
    }
  }

  /**
   * <button onClick = { function (e) {return this.btnClickFn(e) } }>react按钮</button>
   */
  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { () => {
          this.setState({
            msg: 'hello mondy'
          })
        }}>修改</button>
      </div>
    )
  }
}

export default Com;
