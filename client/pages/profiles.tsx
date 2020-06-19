import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'

import NavFooter from '../components/layout/NavFooter'
import ProfileItem from '../components/layout/ProfileItem';
import { getProfiles } from '../store/actions/profileActions'
// import Spinner from '../public/images/spinner.gif'

export default () => {
  // const [profiles, setProfiles] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfiles())
  }, [])

  const { profiles, loading } = useSelector(state => state.profile)

  let renderProfileItems;
  if (profiles === null || loading) {
    renderProfileItems = <img src='/images/spinner.gif' style={{ width: "200px", margin: "auto", display: "block" }} alt="Loading..." />
  } else {
    if (profiles.length > 0) {
      renderProfileItems = profiles.map(profile => {
        return <ProfileItem profile={profile} />
      })
    } else {
      renderProfileItems = <h1>No one currently registered</h1>
    }
  }
  return (
    <NavFooter>
      {console.log(profiles)}
      <Container>
        <Row>
          <Col md="12">
            <h1 className="display-4 text-center">Developer Profiles</h1>
            <p className="lead text-center">Browse and connect with developers</p>
            {renderProfileItems}
          </Col>
        </Row>
      </Container>
    </NavFooter>
  )
}
