import React from 'react'
import LoginPage from '@/components/Auth/Login/LoginPage';

export const metadata = {
  title: "Login",
  description:'Join the FutecAI community and unlock your potential.',
};
function Login() {
  return (
    <div>
        <LoginPage/>
    </div>
    
  )
}

export default Login