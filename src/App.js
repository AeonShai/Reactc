import "./App.css";
import User from "./components/User";
const friends = [
  {
    id:1,
    name:'Organ'
  },
  {
    id:2,
    name:'Horgan'
  },
  {
    id:3,
    name:'Rogan'
  }
];


function App ()
{
    return (
        <>
          <User
            name="John"
            surname="Doe"
            age={25}
            isLoggedin={true}
            friends={friends}
            address={{
              title: "Home",
              city: "New York"
            }}
          />
        </>
    );
}

export default App;