import { Row, Card, Col } from "react-bootstrap"
import { FaCheck } from "react-icons/fa"

export default () => {
  return (
    <Row className="mb-3">
      <Col md="12">
        <Card>
          <Card.Body className="bg-light m-3">
            <h3 className="text-center text-info">Roghashin's Bio</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi expedita nobis doloribus fugit molestias similique ipsum! Culpa eligendi fuga asperiores, reiciendis quidem, quae placeat modi necessitatibus minima quaerat dolor officiis.
            </p>
            <hr />
            <h3 className="text-center text-info">Skill Set</h3>
            <Row>
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <div className="p-3">
                  <FaCheck /> HTML
                </div>
                <div className="p-3">
                  <FaCheck /> Javascript
                </div>
                <div className="p-3">
                  <FaCheck /> CSS
                </div>
                <div className="p-3">
                  <FaCheck /> Python
                </div>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
