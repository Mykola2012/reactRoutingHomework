import classNames from 'classnames'
import React, { Component } from 'react'
import styles from './SingUpForm.module.scss'

const INITIAL_VALUES = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: ''
}
const USERNAME_REG_EXPR = /^[a-z0-9_-]{3,16}$/
const EMAIL_REG_EXPR = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
const PASSWORD_REG_EXPR = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*.])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/

class SignUpForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      isUsernameValid: false,
      email: '',
      isEmailValid: false,
      password: '',
      isPasswordValid: false,
      passwordConfirmation: '',
      isPasswordConfirmationValid: false
    }
  }

  handleUsernameChange = ({ target: { value } }) => {
    this.setState({
      username: value,
      isUsernameValid: USERNAME_REG_EXPR.test(value)
    })
  }

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: EMAIL_REG_EXPR.test(value)
    })
  }

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: PASSWORD_REG_EXPR.test(value)
    })
  }

  hanlePasswordConfirmation = ({ target: { value } }) => {
    const { password } = this.state
    this.setState({
      passwordConfirmation: value,
      isPasswordConfirmationValid: value === password
    })
  }

  handleSubmit = e => {
    const {
      isUsernameValid,
      isEmailValid,
      isPasswordValid,
      isPasswordConfirmationValid
    } = this.state

    e.preventDefault()

    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isPasswordConfirmationValid
      ? this.setState(INITIAL_VALUES)
      : alert('Invalid input enter')
  }

  render () {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      isUsernameValid,
      isEmailValid,
      isPasswordValid,
      isPasswordConfirmationValid
    } = this.state
    const usernameClassName = classNames(styles.inputFormSign, {
      [styles.inputValid]: isUsernameValid,
      [styles.inputInvalid]: !isUsernameValid
    })
    const emailClassName = classNames(styles.inputFormSign, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInvalid]: !isEmailValid
    })
    const passwordClassName = classNames(styles.inputFormSign, {
      [styles.inputValid]: isPasswordValid,
      [styles.inputInvalid]: !isPasswordValid
    })
    const passwordConfirmationClassName = classNames(styles.inputFormSign, {
      [styles.inputValid]: isPasswordConfirmationValid,
      [styles.inputInvalid]: !isPasswordConfirmationValid
    })

    return (
      <form className={styles.formContainer} onSubmit={this.handleSubmit}>
        <lable className={styles.lableFormSign}>
          <span className={styles.spanFormSign}>Name</span>
          <input
            className={usernameClassName}
            value={username}
            onChange={this.handleUsernameChange}
            type='text'
            name='userName'
            placeholder='userName'
            autoFocus
          />
        </lable>

        <lable className={styles.lableFormSign}>
          <span className={styles.spanFormSign}>Email</span>
          <input
            className={emailClassName}
            value={email}
            onChange={this.handleEmailChange}
            type='email'
            name='email'
            placeholder='email'
          />
        </lable>

        <lable className={styles.lableFormSign}>
          <span className={styles.spanFormSign}>Password</span>
          <input
            className={passwordClassName}
            value={password}
            onChange={this.handlePasswordChange}
            type='password'
            name='password'
            placeholder='password'
          />
        </lable>

        <lable className={styles.lableFormSign}>
          <span className={styles.spanFormSign}>*Password confirmation</span>
          <input
            className={passwordConfirmationClassName}
            value={passwordConfirmation}
            onChange={this.hanlePasswordConfirmation}
            type='password'
            name='passwordConfirmation'
            placeholder='password confirmation'
            required
          />
        </lable>
        <button className={styles.btnFormSign}> Sign Up</button>
      </form>
    )
  }
}

export default SignUpForm
