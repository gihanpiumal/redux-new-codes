import React, { Component } from 'react'
import { fetchUsers } from '../actions/postAction'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"

class ButtonComponent extends Component {
  render() {
    return (
      <div><button onClick={()=>this.props.fetchUsers()} >Click me</button></div>
    )
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchUsers: fetchUsers},dispatch)
}

export default connect(null,matchDispatchToProps)(ButtonComponent)
