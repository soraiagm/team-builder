import React, { useState } from 'react';


function Form (props) {
    const [member, setMember] = useState ([
        {
         "name": "",
         "email": "",
         "role": ""
        }
    ])

    const handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.value
        })
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
    };
   
    return (
       <form onSubmit={submitForm}>
            <label
                htmlFor="name">Enter your name:
            </label>
            <input 
                id="name"
                type="text"
                name="name"
                value={member.name}
                onChange={handleChanges}
            />
            <label
                htmlFor="email">Enter your email:
            </label>
            <input 
                id="email"
                type="text"
                name="email"
                value={member.email}
                onChange={handleChanges}
            />
            <label
                htmlFor="role">What is your role: 
            </label>
            <input 
                id="role"
                type="text"
                name="role"
                value={member.role}
                onChange={handleChanges}
            />   
            <button type="submit">Add new team member</button> 
        </form>
    );
}

export default Form;