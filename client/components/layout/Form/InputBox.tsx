import { Form } from 'react-bootstrap';

export default function InputBox({ error, name, value, type, onChangeValue, placeholder }) {
  return (
    <Form.Group>
      <Form.Control size="lg" type={type} className={error && `is-invalid`} name={name} value={value} onChange={onChangeValue} placeholder={placeholder} />
      {error && <small className='invalid-feedback'>{error}</small>}
    </Form.Group>
  )
}
