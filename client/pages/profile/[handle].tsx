import React, { useEffect } from 'react'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { getProfilebyHandle } from '../../store/actions/profileActions';

import NavFooter from '../../components/layout/NavFooter';
// import Spinner from '../../public/images/spinner.gif';
import { Button, Container } from 'react-bootstrap';
import ProfileHeader from '../../components/layout/profile/ProfileHeader';
import ProfileAbout from '../../components/layout/profile/ProfileAbout';
import ProfileCredentials from '../../components/layout/profile/ProfileCredentials';
import ProfileGithub from '../../components/layout/profile/ProfileGithub';

export default () => {
  const router = useRouter()
  const { handle } = router.query
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfilebyHandle(handle))
  }, [handle])

  const { profile, loading } = useSelector(state => state.profile)

  let renderProfile;

  console.log(profile)
  if (profile === null || loading) {
    renderProfile = <img src='/images/spinner.gif' style={{ width: "200px", margin: "auto", display: "block" }} alt="Loading..." />
  } else {
    console.log(profile.user?.name)
    renderProfile = (
      <div>
        <Button variant="light" className="mb-3" onClick={() => Router.back()}>Back To Profiles</Button>
        <ProfileHeader profile={profile} />
        <ProfileAbout />
        <ProfileCredentials />
        <ProfileGithub />
      </div>
    )
  }

  return (
    <NavFooter>
      <Container>
        {renderProfile}
      </Container>
    </NavFooter>
  )
}
