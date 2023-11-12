import React, {useContext} from "react";
import { AppContext } from "../Context/ContextApi";
import Poll from "./Poll";

function PollManagement()
{
    const {votes} = useContext(AppContext);

    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col">
                    <h4>Poll Management</h4>
                </div>
            </div>
            <div className="row">
                {
                    votes.map((item) => ( <Poll key={item.uid} question={item.question} options={item.options} answers={item.votes} /> ))
                }
            </div>
        </div>
    )
}

export default PollManagement