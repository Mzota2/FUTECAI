'use client';
import React, {useEffect} from 'react'
import useStore from './store';
import axios from 'axios';
function ClientWithBlogs({children}) {
    // Get the current pathname from Next.js router
    const setBlogs = useStore((state)=> state.setBlogs);

    // setActiveUser
    const handleSetBlogs = async()=>{
        try {
        const response = await axios.get('/api/blog');
        const {data} = response;
        setBlogs(data);
        } catch (error) {
        console.log(error);
        }
    }

    useEffect(()=>{
      handleSetBlogs();
    }, []);
  return (
    <div>{children}</div>
  )
}

export default ClientWithBlogs