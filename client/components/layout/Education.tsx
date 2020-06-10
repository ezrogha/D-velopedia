import { Table, Button } from 'react-bootstrap'

export default ({ education }) => {
  return (
    <div>
      <h4 className="mb-4">Education Credentials</h4>
      <Table responsive>
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td><Button variant="danger">Delete</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
