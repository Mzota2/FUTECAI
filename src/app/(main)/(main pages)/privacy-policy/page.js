import React from 'react'
import PrivacyPolicyPage from '../../../../components/PrivacyPolicy/PrivacyPolicyPage'

export const metadata = {
  title: "Privacy Policy",
  description:'Learn more about our privacy policy and how we protect your information.',
};

function PrivacyPolicy() {
  return (
    <div>
        <PrivacyPolicyPage/>
    </div>
    
  )
}

export default PrivacyPolicy