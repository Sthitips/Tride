import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => { //receives the clicked instance
    const navigate= useNavigate();
  return (
    <div className="h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: "url('/mountfiji.jpg')" }}>
        <div className='flex flex-col items-center justify-center gap-5'>
            <div>
                <h1 className='text text-white text-8xl'>Tride</h1>
            </div>
            <div>
                <h2 className='text-white text-2xl'>The last minute travel app</h2>
            </div>
            <div>
                <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-400" onClick={()=>navigate("/login")}>Get started</button> 
            </div>
        </div>
    </div>
  )
}

export default Home
