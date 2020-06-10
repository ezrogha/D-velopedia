import { Form } from 'react-bootstrap'

export default ({ options, value, onChangeValue }) => {
  const renderOptions = () => {
    return options.map(option => {
      return <option value={option.value}>{option.label}</option>
    })
  }
  return (
    <Form.Group>
      <Form.Control size="lg" value={value} as="select" onChange={onChangeValue}>
        {renderOptions()}
      </Form.Control>
    </Form.Group>
  )
}
