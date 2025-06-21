import React from 'react'
import BlogPage from '@/components/Blog/BlogPage';
import axios from 'axios';
import { stripHtml } from '@/helper';

export async function generateMetadata({ params }) {
    
    try {
       // const { params } = context; // Destructure params
        const slug = await params?.slug;
        if (!params || !slug) {
        return { notFound: true }; // Handle missing params
        }
        const response = await axios.get (`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);
        const allBlogs = response?.data;
        const modifiedSlug = slug.replace(/%20/g, " ");
        const data = allBlogs?.find((blog) => blog.title === modifiedSlug);

        return {
        title: `${data?.title} Blog`,
        description: (stripHtml(data?.description?.substring(0, 100))) || "Read this amazing blog post!",
        openGraph: {
            title: `${data?.title}`,
            description: `${(stripHtml(data?.description?.substring(0, 100)))}...`,
            images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}${data?.image}`,
                width: 800,
                height: 600,
                alt: "Open Graph Image",
            },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: data?.title,
            description:(stripHtml(data?.description?.substring(0, 100)))+`...` || "Read this amazing blog post!",
            images: [`${process.env.NEXT_PUBLIC_BASE_URL}${data?.image}`],
        },

        };
        } catch (error) {
        console.log(error);
        }
   
  }
function Blog() {
    return (
        <>
            <BlogPage/>
        </>
        
    )
}

export default Blog