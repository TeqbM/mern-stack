import Input  from '../Atoms/Input'
import Button  from '../Atoms/Button'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  
  const [username, setUsername] = useState('teqM')
  const [pass, setPass] = useState('')
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  let baseURL = import.meta.env.VITE_GET_DATA_URL;
  
  const loginUser = async (event) => {
    event.preventDefault();

    setIsLoading(true); // Indicate loading state

    try {
      const response = await axios.post(`${baseURL}/login`, {
        username,
        password:pass,
      });

      // Handle successful login (e.g., store token, redirect to protected area)
      console.log('Login successful:', response.data);
      navigate('/')
      // ...

    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login failed'); // Display specific error message if available
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div>
        <form onSubmit={loginUser} className='cart w-full max-w-80 mx-auto'>
        <Input placeholder="Enter UserNmae" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input placeholder=" Enter Password" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </Button>
        {errorMessage && <div className="error-message text-red-600">{errorMessage}</div>}

        </form>
    </div>
  )
}
