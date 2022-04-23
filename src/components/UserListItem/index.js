import styles from './UsersListItem.module.scss'
import TrashIcon from 'mdi-react/TrashIcon'

function UsersListItem (props) {
  const {
    user: { firstName, lastName, age, imgSrc, city, isSelected },
    selectUser,
    removeUser
  } = props

  const liStyle = {
    border: `2px solid ${isSelected ? 'rgb(240, 5, 5)' : 'rgb(8, 8, 224)'}`,
    margin: `${isSelected ? '30px 0' : '10px 0 0'}`
  }

  return (
    <li
      className={styles.listItem}
      onClickCapture={() => selectUser()}
      style={liStyle}
    >
      <img
        src={imgSrc}
        alt={`${firstName} ${lastName}`}
        className={styles.imgUser}
      />
      <div className={styles.infoUserWrapper}>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>Age: {age}</p>
        <p>City: {city}</p>
      </div>
      <TrashIcon className={styles.trashIcon} onClick={() => removeUser()} />
    </li>
  )
}

export default UsersListItem
