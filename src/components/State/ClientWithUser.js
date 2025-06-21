'use client';
import React from 'react'
import { SessionProvider } from 'next-auth/react';
import ClientUserContext from './ClientUserContext';
function ClientWithUser({children}) {
  return (
    <SessionProvider>
      <ClientUserContext>{children}</ClientUserContext>
    </SessionProvider>
  )
}

export default ClientWithUser