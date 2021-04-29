
export default function PersonRow(props){
    const p = props.person;
    return (
        <tr>
            <td>{p.firstName}</td>
            <td>{p.lastName}</td>
            <td>{p.gender}</td>
            <td>{p.birthday}</td>
            <td>{p.email}</td>
            <td>{p.password}</td>
            <td>{p.about}</td>
        </tr>      
    );
}