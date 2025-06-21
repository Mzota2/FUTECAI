import React, { Suspense } from 'react'
import ResetPasswordPage from '../../../../components/Auth/ResetPassword/ResetPasswordPage'

export const metadata = {
  title: "Reset Password"
};
function ResetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordPage/>
    </Suspense>
    
  )
}

export default ResetPassword;