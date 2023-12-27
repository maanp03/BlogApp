import React from 'react'
import { auth } from '../Firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const googleClick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    
    // console.log(result);
    navigate('/blogs')
  }

  return (
    <>
    <div className="container">
      <div className='h-100 d-flex justify-content-center align-items-center' style={{ height: '100vh' , marginTop: '300px' } }>
      <img 
            onClick={googleClick}
            src="./images/google.jpg"
            style={{
              width: '20%',
              height: 'auto',
              borderRadius: '10%', 
              cursor: 'pointer',
           
             
            }}
         
            alt="Google Logo"
            
          />
      </div>
    </div>
  </>
  )
}

export default Login
