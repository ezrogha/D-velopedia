import { Table, Button } from 'react-bootstrap'

export default ({ experience }) => {
  return (
    <div>
      <h4 className="mb-4">Experience Credentials</h4>
      <Table responsive>
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
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
