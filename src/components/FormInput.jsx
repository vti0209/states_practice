import {useState} from 'react';

export function Form() {
    const [name, setName] = useState('');
    return (
        <div>
            <h1>Form 1</h1>
            <input type="text" value={name} placeholder="Nhập tên..." onChange={(e) => setName(e.target.value)} />
            <p>Trả về tên: {name}</p>
        </div>
    );
}

export function Form2() {
    const [fullName, setFullName] = useState({firstName: '', lastName: ''});
    const handleChange = (e) => {
        setFullName({...fullName, [e.target.name]: e.target.value});
    }
    return (
        <div>
            <h1>Form 2</h1>
            <input type="text" name="firstName" value={fullName.firstName} onChange={handleChange} placeholder="First Name" />
            <br />
            <br />
            <input type="text" name="lastName" value={fullName.lastName} onChange={handleChange} placeholder="Last Name" />
            <br />
            <p>Tên đầy đủ: {fullName.firstName} {fullName.lastName}</p>
        </div>
    );
}