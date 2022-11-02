import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
import {useState} from "react";

function App() {
   const [userList, setUsersList] = useState([]);

    const addUserHandler = (userName, userAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {name: userName, age: userAge, id: Math.random().toString()}
            ]
        });
    }

  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
