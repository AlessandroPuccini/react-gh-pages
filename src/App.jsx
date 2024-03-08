import React, { useState } from 'react';
import AddUser from './AddUser';
import UsersList from './UsersList';

function App() {

const userList = [
  {id: 1, nome: "Andrea Rossi", email: "andrea@email.it"},
  {id: 2, nome: "Angelica Bianchi", email: "angelica@email.it"},
  {id: 3, nome: "Mario Verdi", email: "mario@email.it"},
];

const [users, setUsers] = useState(userList);

const handleAddUser = (newUser) => {
 setUsers((prev) => [...prev, newUser]);
};

const handleDeleteUser = (idUser) => {
  if(confirm ("sei sicuro di voler cancellare l'utente?")){
    setUsers(users.filter(user => user.id !== idUser));
  };

const handleModifyUser = (idUser, newName) => {
  const newUsers = users.map((user) => 
  user.id === idUser ? {...user, nome: newName} : user );
  setUsers(newUsers);
};

};
  return (
    <main>
      <h1>Elenco Utenti</h1>
      <AddUser onAddUser={handleAddUser}/> 
      <UsersList
      users={users} 
      onDeleteUser={handleDeleteUser} />
    </main>
  )
}

export default App
