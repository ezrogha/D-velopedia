import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

import {createProfile} from '../store/actions/profileActions'

import NavFooter from '../components/layout/NavFooter'
import InputBox from '../components/layout/Form/InputBox'
import InputBoxSocial from '../components/layout/Form/InputBoxSocial'
import { Container, Row, Col, Button } from 'react-bootstrap'
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

      case "gitUsername":
        setgitUsername(value)
        break;

      case "bio":
        setbio(value)
        break;

      case "twitter":
        settwitter(value)
        break;

      case "facebook":
        setfacebook(value)
        break;

      case "linkedIn":
        setlinkedIn(value)
        break;

      case "youtube":
        setyoutube(value)
        break;

      case "instagram":
        setinstagram(value)
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
      handle,
      status: proffesionalStatus,
      company,
      website,
      location,
      skills,
      githubusername: gitUsername,
      bio,
      twitter,
      facebook,
      linkedin: linkedIn,
      youtube,
      instagram
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
              <h1 className="display-4 text-center">Edit Your Profile</h1>
              <p className="lead text-center">Add some Info to make your profile stand out</p>
              <span className="d-block pb-3">* = required fields</span>
              <InputBox error="" type="text" name="handle" value={handle} onChangeValue={changeValue} placeholder="* Profile handle" />
              <SelectGroup options={developerOptions} value={proffesionalStatus} onChangeValue={onhandleProfessionalChange} />
              <InputBox error="" type="text" name="company" value={company} onChangeValue={changeValue} placeholder="Company" />
              <InputBox error="" type="text" name="website" value={website} onChangeValue={changeValue} placeholder="Website" />
              <InputBox error="" type="text" name="location" value={location} onChangeValue={changeValue} placeholder="Location" />
              <InputBox error="" type="text" name="skills" value={skills} onChangeValue={changeValue} placeholder="Skills" />
              <InputBox error="" type="text" name="gitUsername" value={gitUsername} onChangeValue={changeValue} placeholder="Github Username" />
              <InputBox error="" type="textarea" name="bio" value={bio} onChangeValue={changeValue} placeholder="A short bio about yourself" />

              {/* Social Media */}
              <Button variant="light" className="mb-3" onClick={() => setShowSocialMedia(!showSocialMedia)}>Add Social Media Links</Button> Optional
                {showSocialMedia &&
                <>
                  <InputBoxSocial error="" type="text" name="twitter" value={twitter} onChangeValue={changeValue} placeholder="Twitter handle URL" icon={FaTwitter} />
                  <InputBoxSocial error="" type="text" name="facebook" value={facebook} onChangeValue={changeValue} placeholder="Facebook  Page URL" icon={FaFacebook} />
                  <InputBoxSocial error="" type="text" name="linkedIn" value={linkedIn} onChangeValue={changeValue} placeholder="LinkedIn Profile URL" icon={FaLinkedin} />
                  <InputBoxSocial error="" type="text" name="youtube" value={youtube} onChangeValue={changeValue} placeholder="Youtube Channel URL" icon={FaYoutube} />
                  <InputBoxSocial error="" type="text" name="instagram" value={instagram} onChangeValue={changeValue} placeholder="Instagram Page URL" icon={FaInstagram} />
                </>
              }
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
