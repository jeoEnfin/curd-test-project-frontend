import React,{useEffect,useState} from 'react';
import axios from 'axios';



const NavBar = () => {
  const [data,setData] = useState('')

  useEffect(() => {
   const token =  localStorage.getItem('token')
   const getUser = async () =>{
   try {
    const headers = { 'Authorization': `Bearer ${token}` };
    const response = await axios.get(`http://localhost:4000/api/users/currentUser`, {headers});
    console.log("user API Response: ", response.data);
    setData(response.data)
                
   } catch (err) {
    console.error("Error fetching books:", err);
   }
  }
  getUser();
  },[]);

  const logoutHandler = () => {
    window.location.href = '/login';
  };

  return (
    <div className='navbar'>
      <div className='nav-Link' >
      <a href="/" style={{ textDecorationLine: "none" }}>Home</a>
       <a href="/addBook" style={{ textDecorationLine: "none" }} >Add Book</a>
      </div>
      <div className='nav-head'>
      <h4>{data.username}</h4>
      <button onClick={logoutHandler}>logout</button>
      </div>
    </div>
  )
}

export default NavBar