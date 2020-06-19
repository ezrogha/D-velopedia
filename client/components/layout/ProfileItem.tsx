import { Card, Row, Image, Button } from "react-bootstrap"
import { FaCheck } from 'react-icons/fa'

import isEmpty from '../../validation/isEmpty'
import Link from "next/link"


export default ({ profile }) => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <div className="col-2">
            <Image roundedCircle alt="profile-img" src={profile.user.avatar} />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.user.name}</h3>
            <p>
              {profile.status} {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}
            </p>
            <p>
              {isEmpty(profile.location) ? null : <span>{profile.location}</span>}
            </p>
            <Link href={`/profile/${profile.handle}`}><Button variant="info">View Profile</Button></Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profile.skills.slice(0,4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <FaCheck className="pr-1" />{skill}
                </li>
              ))}
            </ul>
          </div>
        </Row>
      </Card.Body>
    </Card>
  )
}
