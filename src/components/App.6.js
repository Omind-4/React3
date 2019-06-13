import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super(props);
    console.log('1', this); 
  }

  btnClickFn ( id) {
    console.log(id, this);
  }

  /**
   * <button onClick = { function (e) {return this.btnClickFn(e) } }>react按钮</button>
   */
  render () {
    return (
      <div>
        {/* 推荐使用 */}
        <button onClick = { this.btnClickFn.bind(this, 22)}>react按钮</button>
      </div>
    )
  }
}
// const com = new Com()
// com.btnClickFn()
export default Com;
