import {useState} from 'react';

export function Form() {
    const [name, setName] = useState('');
    return (
        <div>
            <h1>Form</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Name: {name}</p>
        </div>
    );
}