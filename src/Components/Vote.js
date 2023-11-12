import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/ContextApi";

function Vote() {
    const params = useParams();
    const { votes, dispatch } = useContext(AppContext);
    const voted = votes.filter((item) => item.uid == params.uid);
    console.log(voted);

    const [option, setOption] = useState('');
    const [user, setUser] = useState('');
    const [vote, setVote] = useState(voted[0]);

    // useEffect(() => {
    //     const voted = votes.filter((item) => item.uid == params.uid);
    //     console.log(voted);
    //     setVote(voted[0]);
    // }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            'type': 'VOTE',
            'value': {
                uid: params.uid,
                user,
                vote: option
            }
        })
    }


    return (
        <div className="container mt-5 pt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <label>
                            User :
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={user}
                            onChange={(e) => { setUser(e.target.value) }}
                            required
                        />
                        <br></br>
                        <label>
                            Question :
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={vote.question}
                            required
                        />
                        <br></br>
                        <label>
                            Select one Option
                        </label>
                        <br></br>
                        {
                            vote.options.map((item) => (
                                <div key={item} >
                                    <input  type="radio" name="options" value={item} onChange={(e) => { setOption(e.target.value) }} readOnly></input>
                                    <label>{item}</label><br></br>
                                </div>
                            ))
                        }

                        <button type="submit" className="btn btn-primary mt-4">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Vote;

