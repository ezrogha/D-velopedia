import { Button} from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'

export default function FacebookButton({handleClose}) {
  return (
    <Button variant="google-light" size="lg" block onClick={handleClose}>
      <FcGoogle fontSize="30" className="position-absolute ml-5" style={{ left: 0 }} /> Continue with Google
    </Button>
  )
}
