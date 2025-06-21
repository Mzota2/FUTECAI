import React, { Suspense } from 'react';
import Blogs from '@/components/Blog/Blogs';
import TopBlogs from '@/components/Blog/TopBlogs';
import RecentBlogs from '@/components/Blog/RecentBlogs';
import TopBar from '@/components/Blog/TopBar';

export const metadata = {
  title: "Blog",
  description:'Join the FutecAI community and unlock your potential.',
};
function Blog() {
  return (
    <div>
      <TopBar/>
      {/* Blog List Section */}
      <div className="max-w-[1200px] mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Cards */}
        <div className="lg:col-span-2 w-full order-2 lg:order-1">
          <Suspense fallback={<div className='text-secondary'>Loading blog posts...</div>}>
              <Blogs/>
          </Suspense>
          
        </div>

        {/* Aside Section */}
        <aside className="w-full order-1 lg:order-2 lg:col-span-1 space-y-8 animate-fade-in delay-100 bg-white h-fit p-4 md:p-8 shadow-sm drop-shadow-md rounded-md mt-4  lg:mt-0">
          {/* Top Blogs */}
          <Suspense fallback={<div className='text-secondary'>Loading blog posts...</div>}>
              <TopBlogs/>
          </Suspense>
          
          {/* Recent Blogs */}
          <Suspense fallback={<div className='text-secondary'>Loading blog posts...</div>}>
              <RecentBlogs />
          </Suspense>
          
        </aside>
      </div>
    </div>
  );
}

export default Blog