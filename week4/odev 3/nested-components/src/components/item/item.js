/**
 * Her bir personun olusturldugu kisimdir. 
 * Kisiel bilgiler burda gelen props ile direk yazililirken arkadas ve cocuk bilgileri diger sayflarda olusutulmak icin gönderilir.
 */
import Friends from "../friends/friends";
import './item.css'
import Children from "../children/children"
export default function Item(props) {
    return(
    <fieldset  key={props.id}>
        
        <div id="countainer">
        <h3>Kisisel Bilgiler</h3>
        <img src={props.avatar} alt="foto"/>
                <p><strong>First Name:</strong> {props.first_name}</p>
                <p><strong>Last Name:</strong> {props.last_name}</p>
                <p><strong>Address:</strong> {props.address}</p> 
                <p><strong>Salary:</strong> {props.salary}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Email:</strong> {props.email}</p>
                
        </div>
        <div><Friends friends={props.friends}/></div>
        <div><Children children={props.children}/></div>  
    </fieldset>
    )
    
}
