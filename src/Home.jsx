import React, { useEffect } from 'react'
import axios from 'axios';


function Home() {
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get('http://localhost:3001/home')
    .then(result => {console.log(result)
      if (result.data !== "Success") {
      //  navigate('/login')
      }
    })
    .catch(err => console.log(err));
  }, [ ])
  return (
    <h5>welcome you have succeeded in logging in</h5>
  )
}

export default Home;