import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux';
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa';

import {registerUser} from '../../store/actions/authAction';

import InputBox from './Form/InputBox';
import SocialMediaButton from './SocialMediaButton';

export default function RegisterModal({ showRegister, handleCloseRegister, handleShowLogin }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const changeValue = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value)
        break;

      case "email":
        setEmail(value)
        break;

      case "password":
        setPassword(value)
        break;

      case "password2":
        setPassword2(value)
        break;

      default:
        break;
    }
  }

  const { errors, loading } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      name,
      email,
      password,
      password2
    }
    
    dispatch(registerUser(newUser, handleCloseRegister, handleShowLogin))
   
  }

  return (
    <Modal show={showRegister} onHide={handleCloseRegister}>
      <Modal.Header closeButton>
        <Modal.Title>Create your account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showForm &&
          <>
            <InputBox error={errors.name} type="text" name="name" value={name} onChangeValue={changeValue} placeholder="Name" />
            <InputBox error={errors.email} type="email" name="email" value={email} onChangeValue={changeValue} placeholder="Email" />
            <InputBox error={errors.password} type="password" name="password" value={password} onChangeValue={changeValue} placeholder="Password" />
            <InputBox error={errors.password2} type="password" name="password2" value={password2} onChangeValue={changeValue} placeholder="Confirm Password" />
          </>
        }
        {showForm ?
          <Button size="lg" disabled={loading ? true : false} block onClick={onSubmit}>
            { loading ? "Loading..." : "Continue" }
        </Button> :
          <Button size="lg" block onClick={() => setShowForm(true)}>
            Continue with Email
        </Button>}
        <SocialMediaButton handleClose={handleCloseRegister} Icon={FaFacebook} title="Facebook" theme="facebook" />
        <SocialMediaButton handleClose={handleCloseRegister} Icon={FcGoogle} title="Google" theme="google-light" />
      </Modal.Body>
    </Modal>
  )
}
