import { create } from 'zustand';

const useStore = create((set) => ({
    user: undefined,
    setUser: (data) => set((state) => ({user: data})),
    blogs:[],
    setBlogs:(data)=>set((state)=>({blogs:data})),

}));

export default useStore;