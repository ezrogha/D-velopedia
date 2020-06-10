import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

import NavFooter from '../components/layout/NavFooter'
import InputBox from '../components/layout/Form/InputBox'
import InputBoxSocial from '../components/layout/Form/InputBoxSocial'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import PrivateRoute from '../components/PrivateRoute'
import SelectGroup from '../components/layout/Form/SelectGroup'

import { developerOptions } from '../utils/data'

export default () => {
  const [showSocialMedia, setShowSocialMedia] = useState(false)
  const [handle, sethandle] = useState("");
  const [proffesionalStatus, setproffesionalStatus] = useState("0")
  const [company, setcompany] = useState("");
  const [website, setwebsite] = useState("");
  const [location, setlocation] = useState("");
  const [skills, setskills] = useState("");
  const [gitUsername, setgitUsername] = useState("");
  const [bio, setbio] = useState("");
  const [twitter, settwitter] = useState("");
  const [facebook, setfacebook] = useState("");
  const [linkedIn, setlinkedIn] = useState("");
  const [youtube, setyoutube] = useState("");
  const [instagram, setinstagram] = useState("");

  // const dispatch = useDispatch()
  // const {profileErrors} = useSelector(state => state.errors)
  // console.log(profileErrors)

  const changeValue = (e) => {
    const { name, value } = e.target;
    switch (name) {

      case "handle":
        sethandle(value)
        break;

      case "company":
        setcompany(value)
        break;

      case "website":
        setwebsite(value)
        break;

      case "location":
        setlocation(value)
        break;

      case "skills":
        setskills(value)
        break;

      case "bio":
        setbio(value)
        break;

      default:
        break;
    }
  }

  const onhandleProfessionalChange = (e) => {
    setproffesionalStatus(e.target.value)
  }

  const handleSubmit = () => {
    const newUser = {

    }
    // dispatch(createProfile(newUser));
  }

  return (
    <PrivateRoute>
      <NavFooter>
        <Container>
          <Row>
            <Col md="8" className="m-auto">
              <Link href="/dashboard"><Button variant="light">Go Back</Button></Link>
              <h1 className="display-4 text-center">Add Your Experience</h1>
              <p className="lead text-center">Add any developer/programming positions that you have had in the past</p>
              <span className="d-block pb-3">* = required fields</span>
              <InputBox error="" type="text" name="title" value={handle} onChangeValue={changeValue} placeholder="* Job Title" />
              <InputBox error="" type="text" name="company" value={company} onChangeValue={changeValue} placeholder="* Company" />
              <InputBox error="" type="date" name="location" value={location} onChangeValue={changeValue} placeholder="From Date" />
              <InputBox error="" type="date" name="skills" value={skills} onChangeValue={changeValue} placeholder="To Date" />
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Current Job" />
              </Form.Group>
              <InputBox error="" type="textarea" name="bio" value={bio} onChangeValue={changeValue} placeholder="Job Description" />

              <Button variant="primary" size="lg" block onClick={handleSubmit}>
                Submit
            </Button>
            </Col>
          </Row>
        </Container>
      </NavFooter>
    </PrivateRoute>
  )
}
