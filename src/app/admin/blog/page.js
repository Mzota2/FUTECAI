'use client';
import React, { Suspense, useEffect } from 'react';
import Image from 'next/image';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import useStore from '@/components/State/store';
import ClientWithBlogs from '@/components/State/ClientWithBlogs';
import ClientWithUser from '@/components/State/ClientWithUser';
import { stripHtml } from '@/helper';

 function BlogModal({ isOpen, onClose, onSubmit, blog, setBlog, isEdit }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[800px] p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">{isEdit ? 'Edit Blog' : 'Create Blog'}</h2>
        <form onSubmit={onSubmit}>
          <input
            className="w-full mb-3 px-3 py-2 border rounded focus:outline-blue-500"
            type="text"
            name="title"
            placeholder="Blog Title"
            value={blog.title}
            onChange={e => setBlog({ ...blog, title: e.target.value })}
            required
          />
          <div className="w-full mb-3">
            <label className="block mb-1 font-medium">Image</label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-blue-500"
              type="file"
              accept="image/*"
              onChange={e => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = ev => setBlog({ ...blog, image:file, imageUrl: ev.target.result });
                  reader.readAsDataURL(file);
                }
              }}
            />
              {(blog.imageUrl || blog?.image) && <Image
                src={blog.imageUrl || blog?.image}
                alt="Preview"
                width={400}
                height={128}
                className="mt-2 max-w-[400px] w-full h-auto max-h-[128px] object-cover rounded border"
                
              />}

          </div>
          <div className="mb-3">
            <Editor
              apiKey="k8m7isugl3ojgi9ww2o50du7tqk3at89242uekkgga6ncnt1"
              value={blog.description}
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help'
              }}
              onEditorChange={content => setBlog({ ...blog, description: content })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
          >
            {isEdit ? 'Update Blog' : 'Create Blog'}
          </button>
        </form>
      </div>
    </div>
  );
}

const initialBlog = { title: '', image: '', description: '', imageUrl:'', authorId:'' };

function BlogPage() {
  const blogs = useStore((state) => state.blogs) || [];
  const setBlogs = useStore((state)=>state.setBlogs)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const user = useStore((state) => state.user);
  const [currentBlog, setCurrentBlog] = useState({...initialBlog, authorId:user?.id});
  const [editIndex, setEditIndex] = useState(null);

  const openCreateModal = () => {
    setCurrentBlog(initialBlog);
    setIsEdit(false);
    setIsModalOpen(true);
    setEditIndex(null);
  };

  const openEditModal = (blog, idx) => {
    setCurrentBlog(blog);
    setIsEdit(true);
    setIsModalOpen(true);
    setEditIndex(idx);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentBlog(initialBlog);
    setEditIndex(null);
  };

  const handleSubmit = async(e) => {
      e.preventDefault();
      const formData = new FormData();

      formData.append('title', currentBlog.title);
      formData.append('image', currentBlog.image);
      formData.append('description', currentBlog.description);
      formData.append("authorId", user?.id);
      formData.append("date", new Date().toISOString());

      if (isEdit && editIndex !== null) {
        // const handle update
        const updatedBlogs = [...blogs];
        formData.append("id", currentBlog.id);
        await axios.put(`/api/blogPost`, formData);
        updatedBlogs[editIndex] = currentBlog;
        setBlogs(updatedBlogs);
      } else {
        // handle create
        await axios.post('/api/blogPost', formData);
        const updatedBlogs = [...blogs];
        updatedBlogs.unshift({...currentBlog, image:currentBlog.imageUrl});
        setBlogs(updatedBlogs);
      }
      closeModal();
  };

  const handleDelete = async(id) => {
    console.log(id);
    try {
      await axios.delete(`/api/blog/${id}`);
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Blogs</h1>
        <button
          className="bg-blue-700 flex items-center gap-1 cursor-pointer text-white px-4 py-2 ml-2 rounded hover:bg-blue-800 transition"
          onClick={openCreateModal}
        >
          <Plus/> Create Blog
        </button>
      </div>
      <ClientWithBlogs>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-6">
            <Suspense fallback={<p className='text-secondary'>Loading blog posts...</p>}>
              {blogs.map((blog, idx) => (
                <div key={blog.id} className="bg-white rounded-lg shadow p-4 relative">
                  <Image
                    src={blog.image || blog.imageUrl}
                    alt={blog.title}
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded mb-3"
                    style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                  />
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 my-2 text-sm md:text-base" >{stripHtml(blog?.description)?.substring(0, 100)}...</p>
                  <div className="flex gap-2">
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                      onClick={() => openEditModal(blog, idx)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </Suspense>
          
          </div>
      </ClientWithBlogs>
    
      <ClientWithUser>
        <BlogModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleSubmit}
          blog={currentBlog}
          setBlog={setCurrentBlog}
          isEdit={isEdit}
        />
      </ClientWithUser>
      
    </div>
  );
}

export default BlogPage;
