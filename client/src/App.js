import Header from './components/header.js';
import UserForm from './components/user.js';
import Books from "./components/books"
import './App.css';
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const handleUser = (text) =>{
    setUser(text);
  }

  return (
    <div className="App">
    <Header user={user} />
    <UserForm grabUser={handleUser} />
    {user ? <Books /> : null}
      
    </div>
  );
}

export default App;
