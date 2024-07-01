import Input from '../Atoms/Input'
import Button from '../Atoms/Button'
import React, { useState } from 'react'
import axios from 'axios';

export default function Signup() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [userin, setUserin] = useState('');
  const [pass, setPass] = useState('');

  let baseURL = import.meta.env.VITE_GET_DATA_URL;
  
  const addUser = (e) => {
    e.preventDefault()
    const user = {
      username:userin,
      email:email,
      password:pass,
      first_name:fname,
      last_name:lname,
    }


    axios.post(baseURL, user).then(function (response) {
        console.log(response);
        alert('account create success');
        setFname('');
        setLname('');
        setEmail('');
        setUserin('');
        setPass('');
        
      }).catch(function (error) {
        console.log(error);
      });
    
  }
  
  return (
    <div>
      <form onSubmit={addUser} className='cart w-full max-w-80 mx-auto'>
        <Input placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} />
        <Input placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} />
        <Input placeholder="Enter Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Enter username" value={userin} onChange={(e) => setUserin(e.target.value)} />
        <Input placeholder="Enter Password" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <Button className='mt-2'>Create Account</Button>
      </form>
    </div>
  )
}
