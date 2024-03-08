import React from 'react'
import { useState } from 'react';
import modIcon from "./assets/modifica.svg";
import delIcon from "./assets/elimina.svg";

function User({user, onDeleteUser, onModifyUser }) {
const {id, nome, email} = user;
const [inModifica, setInModifica ] = useState(false);
const [newName, setNewName] = useState(nome);

const handleSetNewName = e => setNewName(e.target.value);

const handleKeyDown = (e) => {
  if(e.key === "Enter") {
    onModifyUser(id, newName);
    setInModifica(false);
  }
  else if (e.key === "Escape"){
    setInModifica(false);
    setNewName(nome);
  }
};

  return (
    <tr>
      <td>{inModifica ? 
      <input value={newName} onChange={handleSetNewName} 
      onKeyDown={handleKeyDown}/> : nome}</td>
      <td>{email}</td>
      <td>
        <img onClick={() => setInModifica((prev) => !prev)} src={modIcon}/>
        <img onClick={() => onDeleteUser(id)} src={delIcon}/>
    </td>
    </tr>
  )
}

export default User;
