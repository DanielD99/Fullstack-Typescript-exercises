import { useState } from 'react'
import './App.css'
import Person from './Person'

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleAgeChange= (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(parseInt(e.target.value, 10));
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
  <div>
    <h1>Please enter your details</h1>
    <form onSubmit={handleSubmit}>
    <div>
      <h4>example</h4>
      <Person name="Jhon" age={25} email="Johnson@jhon.jh" />
    </div>
    <div>
      <p>Your Name</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
    <div>
      <p>Your Age</p>
      <input type="number" value={age} onChange={handleAgeChange} />
    </div>
    <div>
      <p>Your Email</p>
      <input type="email" value={email} onChange={handleEmailChange} />
    </div>
    <button type="submit">Submit</button>
    </form>
    {submitted && (
      <div>
        <h3>your submitted details:</h3>
        <Person name={name} age={age} email={email} />
      </div>
  )}
  <br />
  no clue why Jhon is in H1 but after some time i just took the L
  </div>
);

}


export default App;
