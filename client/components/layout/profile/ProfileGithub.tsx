import { Card, Row, Col, Badge } from "react-bootstrap"

export default () => {
  return (
    <div>
      <hr />
      <h3>Latest Github Repos</h3>
      <Card>
        <Card.Body>
          <Row>
            <Col md="6">
              <h4 className="text-info">Repo Name</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis delectus quos non, id nihil earum quo veniam.</p>
            </Col>
            <Col md="6">
              <Badge variant="info" className="mr-1">Stars: 13</Badge>
              <Badge variant="secondary" className="mr-1">Watchers: 5</Badge>
              <Badge variant="success" className="mr-1">Forks: 7</Badge>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
