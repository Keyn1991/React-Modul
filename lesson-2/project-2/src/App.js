import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import UserComponent from "./userComponent";
import {getUsers} from "./services/userService";

function App() {

  let [users, setUsers] = useState([]);


  useEffect(() => {
  getUsers().then(value => setUsers([...value]))
  },[])

  return (
    <div className="App">

      {
        users.map(value => <UserComponent
            key={value.id}
            item={value}/>)
      }

    </div>
  );
}

export default App;
