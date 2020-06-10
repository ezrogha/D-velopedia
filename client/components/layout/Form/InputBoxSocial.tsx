import { InputGroup, FormControl } from 'react-bootstrap';

export default function InputBox({ error, name, value, type, onChangeValue, placeholder, icon: Icon }) {
  return (
    // <Form.Group>
    //   <Form.Control size="lg" type={type} className={error && `is-invalid`} name={name} value={value} onChange={onChangeValue} placeholder={placeholder} />
    //   {error && <small className='invalid-feedback'>{error}</small>}
    // </Form.Group>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1"><Icon /></InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        size="lg" type={type} className={error && `is-invalid`} name={name} value={value} onChange={onChangeValue} placeholder={placeholder}
      />
    </InputGroup>
  )
}
