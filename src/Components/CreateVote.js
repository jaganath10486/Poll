import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/ContextApi';
import {v4} from 'uuid';


function CreateVote() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['']);
    
    const {dispatch} = useContext(AppContext);

    const handleInputChange = (index, event) => {
        const newOptions = [...options];
        newOptions[index] = event.target.value;
        setOptions(newOptions);
    };

    const handleAddField = () => {
        setOptions([...options, '' ]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(question);
        console.log(options);
        if(question != '' && options.length >= 2)
        {
            dispatch({
                type : 'ADD',
                value : {question, options, uid : v4(), votes : [] }
            })
        }

        // console.log('Form Data:', formData);
    };

    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center'>
                <form onSubmit={handleSubmit}>
                    <label>Question : </label>
                    <input
                        type="text"
                        className="form-control"
                        value={question}
                        onChange={(e) => { setQuestion(e.target.value) }}
                        required
                    />
                    <br></br>

                    {options.map((field, index) => (
                        <div className="form-group" key={index}>
                            <label>Option {index + 1}</label>
                            <input
                                type="text"
                                className="form-control"
                                value={field}
                                onChange={(e) => handleInputChange(index, e)}
                                required
                            />
                        </div>
                    ))}

                    <button type="button" className="btn btn-primary" onClick={handleAddField}>
                        Add
                    </button>
                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default React.memo(CreateVote);