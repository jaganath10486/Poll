import React from 'react';
import '../Styles/Home.css';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className='container-fluid mt-5 home'>
                <div className='container' >
                    <div className='row'>
                        <div className='col-4'>
                            <div className="card  mb-3">
                                <div className="card-body">
                                    <p className="card-text">Create A Vote Poll.</p>
                                    <Link to="create-vote" className="btn btn-primary">Creare a Vote Poll </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className="card  mb-3">
                                <div className="card-body">
                                    <p className="card-text">Vote an existing Poll</p>
                                    <Link to="vote" className="btn btn-primary">Vote a Poll </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className="card  mb-3">
                                <div className="card-body">
                                    <p className="card-text">See Vote Poll Results.</p>
                                    <Link to="poll-management" className="btn btn-primary">Poll Management </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Home);