import UsersList from '../../components/UserList'

import React, { Component } from 'react'

const usersDB = [
  {
    id: 1,
    firstName: 'SpongeBob',
    lastName: 'SquarePants',
    age: '35',
    imgSrc:
      'https://static.wikia.nocookie.net/spongebob-new-fanon/images/c/cb/SpongeBob.png',
    city: 'Bikini Bottom'
  },
  {
    id: 2,
    firstName: 'Patrik',
    lastName: 'Star',
    age: 'Unknown',
    imgSrc:
      'https://static.wikia.nocookie.net/spongebob-new-fanon/images/c/cf/Patrick.png',
    city: 'Bikini Bottom'
  },
  {
    id: 3,
    firstName: 'Eugene',
    lastName: 'Krabs',
    age: '73',
    imgSrc:
      'https://static.wikia.nocookie.net/spongebob-new-fanon/images/0/0f/Eugene_H._Krabs.png',
    city: 'Bikini Bottom'
  },
  {
    id: 4,
    firstName: 'Sandy',
    lastName: 'Cheeks',
    age: '36',
    imgSrc:
      'https://static.wikia.nocookie.net/spongebob-new-fanon/images/2/2d/Sandycheeks.png',
    city: 'Houston, Texas'
  },
  {
    id: 5,
    firstName: 'Sheldon',
    lastName: 'Plankton',
    age: 'Unknown',
    imgSrc:
      'https://static.wikia.nocookie.net/spongebob/images/7/77/Plankton_stock_art.png',
    city: 'Bikini Bottom'
  }
]

class UserListPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      users: usersDB.map(u => ({ ...u, isSelected: false }))
    }
  }

  setUsers = newUsers => {
    this.setState({ users: newUsers })
  }

  setUpdatedUsers = updatedUsers => {
    this.setState({ users: updatedUsers })
  }

  render () {
    const { users } = this.state
    return (
      <UsersList
        users={users}
        setUsers={this.setUsers}
        setUpdatedUsers={this.setUpdatedUsers}
      />
    )
  }
}

export default UserListPage
