/**
 * Burada tüm liste olusturulur.
 */
import Table from 'react-bootstrap/Table';
export default function Item(props) {
    return(
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>Fish Type</th>
      <th>Price</th>
      <th>Duration in Days</th>
      <th>Origin Country</th>
      <th>Season</th>
      <th>Stock Volume in Kg</th>
      <th>Sale Locations</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>{(props.index)+1}</td>
      <td>{props.fish.fishType}</td>
      <td>{props.fish.price}</td>
      <td>{props.fish.durationInDays}</td>
      <td>{props.fish.originCountry}</td>
      <td>{props.fish.season}</td>
      <td>{props.fish.stockVolumeInKg}</td>
      <td>{props.fish.saleLocations}</td>
    </tr>

  </tbody>
</Table>
);
}

