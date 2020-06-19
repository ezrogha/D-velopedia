import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router from 'next/router';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';

// import NavigationBar from "../components/layout/NavigationBar";
import ProfileActions from '../components/layout/ProfileActions'
import NavFooter from "../components/layout/NavFooter";
import { getCurrentUserProfile } from '../store/actions/profileActions'

// import Spinner from '../public/images/spinner.gif';
import PrivateRoute from '../components/PrivateRoute';
import Experience from '../components/layout/Experience';
import Education from '../components/layout/Education';

export default function Dashboard() {
  useEffect(() => {
    dispatch(getCurrentUserProfile())
  }, [])

  const dispatch = useDispatch()
  const { profile, loading } = useSelector(state => state.profile)
  const { user } = useSelector(state => state.user)

  let dashboardContent;

  if (profile === null || loading) {
    dashboardContent = <img src='/images/spinner.gif' style={{ width: "200px", margin: "auto", display: "block" }} alt="Loading..." />
  } else {
    if (Object.keys(profile).length > 0) {
      console.log("PROFILE")
      console.log(profile)
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome <Link href={`profile/${profile.handle}`}><a style={{textTransform: "capitalize"}}>{user.name}</a></Link></p>
          <ProfileActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div style={{ marginBottom: "60px" }} />
          <Button variant="danger">Delete My Account</Button>
        </div>
      )
    } else {
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome <span style={{ textTransform: "capitalize" }}>{user.name}</span></p>
          <p>You have not setup your profile, please add some information</p>
          <Button variant="info" onClick={() => Router.push("/create-profile")}>Create your Profile</Button>
        </div>
      )
    }
  }

  return (
    <PrivateRoute>
      <NavFooter>
        <div>
          {/* <NavigationBar /> */}
          <Container>
            <Row>
              <Col>
                <h2 className="display-4">DASHBOARD</h2>
                {dashboardContent}
              </Col>
            </Row>
          </Container>
        </div>
      </NavFooter>
    </PrivateRoute>
  )
}
