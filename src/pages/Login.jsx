import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate= useNavigate();
  return (
    <div>
        <h1>Login page</h1>
        <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" onClick={()=>navigate("/plan")}>Login</button>
    </div>
  )
}

export default Login
