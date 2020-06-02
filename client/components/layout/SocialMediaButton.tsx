import PropTypes from 'prop-types';
import { Button} from 'react-bootstrap'

export default function SocialMediaButton ({handleClose, Icon, title, theme}) {
  return (
    <Button variant={theme} size="lg" block onClick={handleClose}>
      <Icon fontSize="30" className="position-absolute ml-5" style={{ left: 0 }} /> {`Continue with ${title}`}
    </Button>
  )
}

SocialMediaButton.prototype = {
  handleClose: PropTypes.func.isRequired,
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
}
