import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);
  const [friends, setFriends] = useState(['yoshi', 'luigi', 'peach']);
  const [address, setAddress] = useState({city: 'new york', country: 'usa'});
  return (
    <div className="App">
      <h1>My First React App</h1>
      <p>{ name } is { age } years old</p>
      <button onClick={() => setName('luigi')}>Change Name</button>
      <button onClick={() => setAge(30)}>Change Age</button>
      <br />
      <br />
      
      <h2>My Friends:</h2>
      {
        friends.map((friends, index) => (
          <div key={index}>
            <h3>{friends}</h3>
          </div>
        ))
      }
      <button onClick={() => setFriends([...friends, 'bowser'])}>Add Friend</button>
      <hr />
      <br />

      <h2>My Address:</h2>
      <h3>City: {address.city}</h3>
      <h3>Country: {address.country}</h3>
      <button onClick={() => setAddress({city: 'los angeles', country: 'usa'})}>Change Address</button>
    </div>
  );
}

export default App;
