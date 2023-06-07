import React from 'react';

interface PersonProps {
    name: string;
    age: number;
    email: string; 
}

const Person: React.FC<PersonProps> = ({name, age, email}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    )
}


export default Person;