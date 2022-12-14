// Styles
import { useState } from 'react';
import './Create.css'

function Create(){

    const[name, setName] = useState('');
    const[details, setDetails] = useState('');
    const[dueDate, setDueDate] = useState('');
    const[category, setCategory] = useState('');
    const[assignedUsers, setAssignedUsers] = useState([]);

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(name, details, dueDate)
    }

    return (
        <div className="create-form">
            <h2 className="page-title">Create a new project</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Project name:</span>
                    <input 
                    required
                    type="text" 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                </label>
                <label>
                    <span>Project details:</span>
                    <textarea 
                    required
                    type="text" 
                    onChange={(e) => setDetails(e.target.value)}
                    value={details}
                    />
                </label>
                <label>
                    <span>Set due date:</span>
                    <input 
                    required
                    type="date" 
                    onChange={(e) => setDueDate(e.target.value)}
                    value={dueDate}
                    />
                </label>

                <label>
                    <span>Project category:</span>
                    {/* category select here */}
                </label>
                <label>
                    <span>Assign to:</span>
                    {/* assignee select here */}
                </label>

                <button className="btn">Add project</button>
            </form>
        </div>
    );
}

export default Create;