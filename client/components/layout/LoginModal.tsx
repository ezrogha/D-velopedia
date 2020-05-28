import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { Button, Modal } from 'react-bootstrap'
import FacebookButton from './FacebookButton'
import GoogleButton from './GoogleButton'

import {wrapper} from '../../store'
import {loginUser} from '../../store/actions/authAction';

import InputBox from './Form/InputBox';

export default function LoginModal({ show, handleClose }) {
  const [showForm, setShowForm] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const changeValue = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value)
        break;

      case "password":
        setPassword(value)
        break;
    
      default:
        break;
    }
  }

  const { errors } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      email,
      password
    }

    dispatch(loginUser(user))
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login to your account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showForm &&
          <>
            <InputBox error={errors.email} type="email" name="email" value={email} onChangeValue={changeValue} placeholder="Email" />
            <InputBox error={errors.password} type="password" name="password" value={password} onChangeValue={changeValue} placeholder="Password" />
          </>}
        {showForm ? <Button variant="primary" onClick={onSubmit} size="lg" block>
          Continue
              </Button> :
          <Button variant="primary" size="lg" block onClick={() => setShowForm(true)}>
            Continue with Email
              </Button>}
        <GoogleButton handleClose={handleClose} />
        <FacebookButton handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  )
}

export const getStaticProps = wrapper.getStaticProps(() => {});
