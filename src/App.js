import { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const[newName, setName] = useState("")
  const[newAge,setAge] = useState(0)
  const [users, setUsers] = useState([]);
  //setUsers(...users)
  const usersCollectionRef = collection(db, "users");
  const createUser =async()=>{
    await addDoc(usersCollectionRef,{name: newName, age: newAge})
  }
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);

      setUsers(data.docs.map((doc) => ({...doc.data() ,id:doc.id})));
    };
    getUsers();
  }, []);
  
   

  return (

    <div className="App">
      <input  placeholder="Name..." onChange={event=>{setName(event.target.value)}}/>
      <input type='number' placeholder="Age..." onChange={event=>{setAge(event.target.value)}}/>
    <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return(
        <div>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
        </div>);
      })}
    </div>
  );
}

export default App;
