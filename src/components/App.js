import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
function App() {
  const contacts =[
    {
      id: "1",
      name: "Amey",
      email: "amey69@gmail.com",
    },
    {
      id: "2",
      name: "Amya",
      email: "amya88@gmail.com",
    }
  ];
  return (
    <div className='ui container'>
      <h1>hello</h1>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
      <ContactCard/>
      </div>
  );
}

export default App;
