import { Row, Col, ListGroup } from 'react-bootstrap'

export default function ProfileCredentials() {
  return (
    <Row>
      <Col md="6">
        <h3 className="text-center text-info">Experience</h3>
        <ListGroup>
          <ListGroup.Item>
            <h4>Andela</h4>
            <p>Mar 2019 - Mar 2020</p>
            <p>Position: Software Developer</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo omnis laboriosam porro corrupti nemo hic incidunt delectus asperiores, deserunt quidem, dolores, quasi modi odit magni doloremque? Dignissimos placeat velit ex!</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h4>Flux Holdings</h4>
            <p>Mar 2018 - Aug 2018</p>
            <p><b>Position:</b> Software Developer</p>
            <p><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo omnis laboriosam porro corrupti nemo hic incidunt delectus asperiores, deserunt quidem, dolores, quasi modi odit magni doloremque? Dignissimos placeat velit ex!</p>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md="6">
        <h3 className="text-center text-info">Education</h3>
        <ListGroup>
          <ListGroup.Item>
            <h4>Kampala International University</h4>
            <p>Aug 2016 - Mar 2018</p>
            <p><b>Degree:</b> Bachelor</p>
            <p><b>Field of study:</b> Computer Science</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo omnis laboriosam porro corrupti nemo hic incidunt delectus asperiores, deserunt quidem, dolores, quasi modi odit magni doloremque? Dignissimos placeat velit ex!</p>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  )
}
