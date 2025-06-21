import React, {useEffect} from 'react'
import useStore from './store';
import axios from 'axios';
import { useSession } from 'next-auth/react';

function ClientUserContext({children}) {
    // Get the current pathname from Next.js router
    const { data: session } = useSession();
    const setUser = useStore((state)=> state.setUser);
    const user = useStore((state)=> state.user);

    useEffect(()=>{
      if(user) return;
      if(session?.user){
        setUser(session?.user);
      } else {
        try {
          axios.get('/api/user')
          .then(response => setUser(response.data.user))
          .catch(error => console.log(error))
        } catch (error) {
          console.log(error);
        }
      }
    }, [session, user]);

  return (
    <div>{children}</div>
  )
}

export default ClientUserContext