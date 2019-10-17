import React, { useState } from 'react';
import Form from './Form';

function TeamList () {
    const [members, setMembers] = useState ([
        {
         id: 1, 
         name: "Soraia Mustafa", 
         email: "soraiamustafa@yahoo.com", 
         role: "Web Developer"
        }
        ]);

    const addNewMember = member => {
        const newMember = {
            name: member.name,
            email: member.email,
            role: member.role
            }
            setMembers([...members, newMember])
        }

    return (
        <div>
          <h1>Team Members</h1>
            <div>
            <div>
                <Form addNewMember={addNewMember} />
            </div>
               {members.map(member => (
                  <div key={member.id}>
                       <h4>{member.name}</h4>
                       <p>{member.email}</p>
                       <p>{member.role}</p>
                  </div>
               ))}  
            </div>
        </div>
    );
}

export default TeamList;
