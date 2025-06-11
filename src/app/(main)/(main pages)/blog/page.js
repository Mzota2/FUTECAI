'use client';
import React from 'react'
import Image from 'next/image';
import Blogs from '@/components/Blog/Blogs';
import TopBlogs from '@/components/Blog/TopBlogs';
import RecentBlogs from '@/components/Blog/RecentBlogs';
import TopBar from '@/components/Blog/TopBar';

function Blog() {
 
// Example blog data
  const blogs = [
    {
      id: 1,
      title: "How AI is Transforming Business",
      description: "Discover how artificial intelligence is revolutionizing industries and driving innovation across the globe.",
      image: "/AI1.jpg",
      date: "2024-06-01",
      views: 120,
      link: "/blog/ai-transforming-business"
    },
    {
      id: 2,
      title: "The Future of Automation",
      description: "Explore the latest trends in automation and what they mean for the future workforce.",
      image: "/AI2.jpg",
      date: "2024-05-28",
      views: 98,
      link: "/blog/future-of-automation"
    },
    {
      id: 3,
      title: "Machine Learning Basics",
      description: "A beginner's guide to understanding the fundamentals of machine learning.",
      image: "/AI3.jpg",
      date: "2024-05-20",
      views: 75,
      link: "/blog/machine-learning-basics"
    },

    {
      id:4,
      title:"Artificial Intelligence in Healthcare",
      description:"Learn how artificial intelligence is revolutionizing healthcare and improving patient outcomes.",
      image:"/AI4.jpg",
      date:"2024-05-15",
      views:65,
      link:"/blog/artificial-intelligence-in-healthcare"
    }
  ];
  // 

  

  return (
    <div>
      <TopBar blogs={blogs}/>
      {/* Blog List Section */}
      <div className="max-w-[1200px] mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Cards */}
        <div className="lg:col-span-2 w-full order-2 lg:order-1">
          <Blogs blogs={blogs}/>
        </div>

        {/* Aside Section */}
        <aside className="w-full order-1 lg:order-2 lg:col-span-1 space-y-8 animate-fade-in delay-100 bg-white h-fit p-4 md:p-8 shadow-sm drop-shadow-md rounded-md mt-4  lg:mt-0">
          {/* Top Blogs */}
          <TopBlogs blog={blogs} />

          {/* Recent Blogs */}
          <RecentBlogs blog={blogs} />
        </aside>
      </div>
    </div>
  );
}

export default Blog