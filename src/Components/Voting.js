import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/ContextApi';
import SingleVote from './Votes';

function Voting()
{
    const {votes} = useContext(AppContext);

    return (
        <div className='container-fluid'>
            <p>Hello World</p>
            <div className='row d-flex justify-content-center'>
                {
                    votes.map((vote) => (
                        // <p>Hello Wrodl</p>
                        <SingleVote key={vote.uid} id={vote.uid} question={vote.question} />
                    ))
                }
            </div>
        </div>
    )
}

export default React.memo(Voting);