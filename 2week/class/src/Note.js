import React, { Component } from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"


class Note extends Component {



  render() {

    const { title, content } = this.props;

    return (
      <div>
        <div className='col s12 m6 l3'>
          <div className='card yellow lighten-4'>
            <span className='card-title'>{title}</span>
            <div className='card-content black-text'>{content}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Note