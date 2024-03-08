import React from 'react'
import User from "./User";

function UsersList({users, onDeleteUser, onModifyUser }) {
  return (
    <table className='elenco-utenti'>
      <tbody>
        {users.map((user) =>( 
        <User key={user.id} user={user}
        onDeleteUser={onDeleteUser} onModifyUser={onModifyUser}/>
        ))}
      </tbody>
    </table>
  )
}

export default UsersList
