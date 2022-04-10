import React from 'react'
import Blog from "../components/Blog"
import {Link} from "react-router-dom"
function ShowBlogs() {

    const [blogs, setBlogs] = React.useState([]);

    // on each click go to specific blog


    const getBlogs = () =>  fetch('http://localhost:8080/blogs')
    .then(res => res.json())
    .then(data => {
        setBlogs(data);
    })
    .catch(err => console.log(err));
    
    React.useEffect(() => {
        getBlogs();
    }, []);
  
    return (
      <div className="flex flex-wrap gap-10 p-10">
            {blogs.map(blog => (
                <div key={blog._id} onClick={} className="w-56 h-52 shadow p-2 overflow-hidden flex flex-col gap-6 hover:cursor-pointer hover:scale-105 ">
                <h1 className="text-2xl truncate ">{blog.title}</h1>
                <p className="text-xs truncate ">{blog.body}</p>
                </div>
            ))}
        </div>
  )
}



export default ShowBlogs;