import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa';

import { loginUser } from '../../store/actions/authAction';

import InputBox from './Form/InputBox';
import SocialMediaButton from './SocialMediaButton';

export default function LoginModal({ show, handleClose }) {
  const { errors, loading } = useSelector(state => state.auth)
  const { isAuthenticated } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [showForm, setShowForm] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    isAuthenticated && Router.push("/dashboard");
  })

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
        {showForm ? <Button variant="primary" disabled={loading ? true : false} onClick={onSubmit} size="lg" block>
          {loading ? "Loading..." : "Continue"}
        </Button> :
          <Button variant="primary" size="lg" block onClick={() => setShowForm(true)}>
            Continue with Email
              </Button>}
        <SocialMediaButton handleClose={handleClose} Icon={FaFacebook} title="Facebook" theme="facebook" />
        <SocialMediaButton handleClose={handleClose} Icon={FcGoogle} title="Google" theme="google-light" />
      </Modal.Body>
    </Modal>
  )
}

