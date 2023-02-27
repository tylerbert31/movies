import React from "react"
import "../styles/card.css"

function Comment(props) {
  return (
    <React.Fragment>
      <div className="card">
        <div className="img"></div>
        <div className="textBox">
          <div className="textContent">
            <p className="h1">{props.commenter}</p>
          </div>
          <p className="p">{props.comments}</p>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Comment
