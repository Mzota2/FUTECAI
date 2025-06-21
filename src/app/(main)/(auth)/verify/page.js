import React, { Suspense } from 'react'
import VerifyAccountPage from '../../../../components/Auth/Verify/VerifyAccountPage'

export const metadata = {
  title: "Verify Account"
};
function VerifyAccount() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyAccountPage/>
    </Suspense>
    
  )
}

export default VerifyAccount