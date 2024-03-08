import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddUser({onAddUser}) {
  const [nome, setNome] =  useState("");
  const [email, setEmail] =  useState("");

const handleAddUser = e => {
    setEmail("");
    setNome("");
    onAddUser({nome, email, id: uuidv4()});
};

const handleInputNome = (e) => setNome(e.target.value);
const handleInputEmail = (e) => setEmail(e.target.value);

  return (
    <section className='aggiungi-utente'>
      <input onChange={handleInputNome} 
      type="text" placeholder='Nome' value={nome}/>
      <input onChange={handleInputEmail}
      type="text" placeholder='Email' value={email}/>
      <button onClick={handleAddUser}>Aggiungi Utente</button>
    </section>
  )
}

export default AddUser
