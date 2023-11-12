import React from "react";
import { Link } from 'react-router-dom';


function SingleVote(props) {
    return (
      <div className="col-3">
          <div className="card  mb-3">
            <div className="card-body">
                <p className="card-text">{props.question}</p>
                <Link to={`${props.id}`} className="btn btn-primary">Vote</Link>
            </div>
        </div>
      </div>
    )
}

export default React.memo(SingleVote);