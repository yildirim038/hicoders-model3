/**
 * Arkadaslarin listesinin olusturuldugu kisimdir. Bu liste item kisminda bir araya gelecektir.
 */
import './friends.css';
const Friends = (props) => {
const friends= props.friends.map( (friend,index) => {    
  return (
        <div key={index} >
            <img src={friend.avatar} alt="foto"/>
            <p><strong>First Name:</strong> {friend.firstName}</p>
            <p><strong>Last Name:</strong>{friend.lastName}</p>
            <p><strong>Gender:</strong>{friend.gender}</p>
            <p><strong>Phone:</strong>{friend.phone}</p>  
       </div>)
})
  return(
        <section>
            <h3>Friends</h3>
            {friends}     
        </section>
    );
}

export default Friends;