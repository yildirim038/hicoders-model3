import "bootstrap/dist/css/bootstrap.min.css";
import {Table} from "react-bootstrap";
import './list.css'
/**
 * Olusturulan listeyi ekrana basan fonsiyon.
 * @param {*} props 
 * @returns 
 */
export default function CreateList (props){
    return(
        <div className="screen" title="screeninfo">
            <Table striped bordered hover>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Birthday</th>
                <th>Password</th>
                <th>About</th>
            </tr>
            </thead>
            <tbody>
                 {props.recipes.map ((p)=> (
                    <tr>
                        <td>{p.firstName}</td>
                        <td>{p.lastName}</td>
                        <td>{p.gender}</td>
                        <td>{p.birthday}</td>
                        <td>{p.password}</td>
                        <td>{p.about}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
   </div>
    )
}