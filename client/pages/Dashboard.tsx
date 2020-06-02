import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import NavigationBar from "../components/layout/NavigationBar";
import { getCurrentUserProfile } from '../store/actions/profileActions'
import { Container, Row, Col, Button } from 'react-bootstrap';

import Spinner from '../public/images/spinner.gif';

export default function Dashboard() {
  useEffect(() => {
    dispatch(getCurrentUserProfile())
  }, [])

  const dispatch = useDispatch()
  const { profile, loading } = useSelector(state => state.profile)
  const { user } = useSelector(state => state.user)
  let dashboardContent;

  if (profile === null || loading) {
    dashboardContent = <img src={Spinner} style={{ width: "200px", margin: "auto", display: "block" }} alt="Loading..." />
  } else {
    if (Object.keys(profile).length > 0) {
      dashboardContent = <h4>TODO: ADD UI</h4>
    } else {
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome <span style={{textTransform: "capitalize"}}>{user.name}</span></p>
          <p>You have not setup your profile, please add some information</p>
          <Button variant="info">Create your Profile</Button>
        </div>
      )
    }
  }

  return (
    <div>
      <NavigationBar />
      <Container>
        <Row>
          <Col>
            <h2 className="display-4">DASHBOARD</h2>
            {dashboardContent}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
