import { useEffect, useState } from 'react'
import axios from 'axios';


type Person = {
  id: string;
  name: string;
  age: number;
  occupation: string;
}

const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [newPerson, setNewPerson] = useState<Person>({
    id: '',
    name: '',
    age: 0,
    occupation: '',

  });

  const [updatePerson, setUpdatePerson] = useState<Person>({
    id: '',
    name: '',
    age: 0,
    occupation: '',
  });

  useEffect(() => {
    fetchPeople();
  }, []);


  const fetchPeople = async () => {

    try{
      const response = await axios.get('http://localhost:3001/people');
      setPeople(response.data);
    }catch(error){
      console.log("could not fetch people", error)
    }
  };

  const addPerson = async () => {
    try{
      const response = await axios.post('http://localhost:3001/people', newPerson);
    setPeople([...people, response.data]);
    setNewPerson({id: '', name: '', age: 0, occupation: '' });
  }catch (error){
    console.log("could not add person", error)
  }
};

  const deletePerson = () => {
    setPeople(people.slice(0, people.length -1));

  }

  const sortByAge = () => {
    const sortedPeople = [...people].sort((a, b) => a.age - b.age);
    setPeople(sortedPeople);
  }
// @ts-ignore
  const updatePersonDetails = () => {
    setPeople((prevPeople) => 
    prevPeople.map((person) =>
    person.name === updatePerson.name ? updatePerson : person
    )
    );
    setUpdatePerson({name: '', age: 0, occupation: '', id: ''});

  };

  return (
    <>
      <div>
      </div>
      <h1>list of people</h1>
      <div className="card">
      <ul>
      {people.map((person, index) =>(
        <li key={index}>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Occupation: {person.occupation}</p>
        </li>
      ))}
      </ul>

      <button onClick={addPerson}>Add Person</button>
      <button onClick={deletePerson}>Delete last person</button>
      <button onClick={sortByAge}>Sort people by age</button>

      <form onSubmit={(e) => e.preventDefault()}>
        <h2> Add a new Person</h2>
        <input
        type="text"
        placeholder="Name"
        value={newPerson.name}
        onChange={(e) =>
          setNewPerson({ ...newPerson, name:String (e.target.value) })}
        />
        <input
        type="number"
        placeholder="Age"
        value={newPerson.age}
        onChange={(e) =>
          setNewPerson({ ...newPerson, age:Number (e.target.value)})}
        />
        <input
        type="text"
        placeholder="Occupation"
        value={newPerson.occupation}
        onChange={(e) =>
          setNewPerson({ ...newPerson, occupation:String (e.target.value)})}
        />
        <button onClick={addPerson}>Save person to DB</button>
      </form>

      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Update person details</h2>
        <input
        type="text"
        placeholder="Name"
        value={updatePerson.name}
        onChange={(e) => setUpdatePerson({ ...updatePerson, name: String(e.target.value) })}
        />
        <input
        type="number"
        placeholder="Age"
        value={updatePerson.age}
        onChange={(e) => setUpdatePerson({ ...updatePerson, age: Number(e.target.value) })}
          />
          <input
          type="text"
          placeholder="occupation"
          value={updatePerson.occupation}
          onChange={(e) => setUpdatePerson({ ...updatePerson, occupation: String(e.target.value) })}
          />
          <button onClick={updatePersonDetails}>Update person details</button>
          </form>
      </div>
    </>
  );
};


export default App;
