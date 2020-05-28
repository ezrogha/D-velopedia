import { Button } from 'react-bootstrap'
import { FaFacebook } from 'react-icons/fa'

export default function GoogleButton({ handleClose }) {
  return (
    <Button variant="facebook" size="lg" block onClick={handleClose}>
      <FaFacebook fontSize="30" className="position-absolute ml-5" style={{ left: 0 }} /> Continue with Facebook
    </Button>
  )
}
