/**
 * Cocuk bilgilerinin olusturuldugu ksimdir. Burda olsturulan kisiler item.js e göndrilio orada bir araya getirilir.
 */
import './children.css'
const Children = (props) => {
const children= props.children.map( (child,index) => {    
    return (
        <div key={index} >
            <img src={child.avatar} alt="foto"/>
            <p><strong>First Name:</strong> {child.firstName}</p>
            <p><strong>Last Name:</strong>{child.lastName}</p>
            <p><strong>Gender:</strong>{child.gender}</p>
            <p><strong>Birthday:</strong>{child.birthday}</p>  
        </div>)
})
    return(
        <section>
            <h3>Children</h3>
            {children}     
        </section>
    );
}

export default Children;
