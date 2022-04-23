import UsersListItem from '../UserListItem'

function UsersList ({ users, setUsers, setUpdatedUsers }) {
  const mapUser = (u, index) => {
    const selectUser = () => {
      const newUsers = [...users]

      newUsers[index].isSelected = !newUsers[index].isSelected

      setUsers(newUsers)
    }

    const removeUser = () => {
      const updatedUsers = [...users]

      updatedUsers.splice(index, 1)

      setUpdatedUsers(updatedUsers)
    }

    return (
      <UsersListItem
        key={u.id}
        user={u}
        selectUser={selectUser}
        removeUser={removeUser}
      />
    )
  }

  return <ul>{users.map(mapUser)}</ul>
}

export default UsersList
