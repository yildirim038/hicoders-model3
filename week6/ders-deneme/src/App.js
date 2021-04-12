import React,{ useState,useEffect} from 'react'
import './App.css';
const App =()=>{

  const API_URL= 'https://fresh-elephant-71.loca.lt';
  const [recipes,setRecipes] = useState([]);

  useEffect(()=>{
    loadData();
  },[])
  
  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipes (data);
    console.log(data);
  }

  return (
    <div className="App">
      {
        recipes.map ((p,index)=> (
          <div key={index}>
           <span>First Name : {p.first_name}</span>
           <span>Last Name : {p.last_name}</span>
           <span>Email : {p.email}</span>
          </div>
        ))
      }
    </div>
  )
}
export default App;
