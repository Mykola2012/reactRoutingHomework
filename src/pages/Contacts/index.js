import styles from './Contacts.module.scss'

const Contacts = () => (
  <main className={styles.container}>
    <h2 className={styles.subTitle}>Contacts</h2>
    <div className={styles.contactsWrapper}>
      <p>
        Student{' '}
        <a
          href='https://github.com/Mykola2012'
          target='_blank'
          rel='noreferrer'
        >
          Revika Mykola
        </a>
      </p>
      <p>
        Training Center by{' '}
        <a href='https://freshcode.training/' target='_blank' rel='noreferrer'>
          FRESHCODE
        </a>
      </p>
    </div>
  </main>
)

export default Contacts
