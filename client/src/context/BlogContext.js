import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { blogURL } from './../config/Config';

const BlogContext = createContext();

const BlogContextProvider = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getBlogs() {
        setLoading(true);
        await axios.get(blogURL).then((res) => {
            setBlogs(res.data);
            setLoading(false);
        });
    }

    useEffect(() => {
        getBlogs();
    }, []);

    const addBlog = (blog) => {
        setBlogs([blog,...blogs]);
    };
    const deleteBlog = (id) => {
        setBlogs(blogs.filter((blog) => blog._id !== id));
    };
    const updateBlog = (blog) => {
        setBlogs(blogs.map((b) => (b._id === blog._id ? blog : b)));
    };



  return (
    <BlogContext.Provider value={{blogs,addBlog,deleteBlog,updateBlog}}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
export { BlogContextProvider };