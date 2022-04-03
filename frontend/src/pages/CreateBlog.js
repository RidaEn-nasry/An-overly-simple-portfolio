// creating a comopnent


import React from 'react';
import { useState } from 'react';


function CreateBlog() {
    // Create a state for the form
    const [title, setTitle] = useState('');
    const [body , setBody] = useState('');
    
    // a function to post data to the server using fetch
    const handleSubmit = async e => {
        e.preventDefault();
        // fetch title and body to the server 
        const data = {
            title: title,
            body: body,
        };
        // ftech the data to the server
        await fetch('http://localhost:8080/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            // mode: "cors"
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
            }
        )
            .catch(err => console.log(err));
            
    };
    return (
        <div>

            {/* creating and styling three text-arias one for title one for body and one date */}
            {/* style inputs with tailwind css */}
            <form onSubmit={ handleSubmit}>
                <div className="form-group flex flex-col ml-20 w-full ">
                    <label htmlFor="title" className="mt-10">Title:</label>
                    {/* styling textarea with tailwind css */}
                    <textarea id="title" onChange={ e => setTitle(e.target.value)} className="form-control w-1/2 bg-gray-200 border-gray-200 border-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "></textarea>
                    <label htmlFor="body"  className="mt-10" >Body:</label>
                    <textarea id="body" onChange={e => setBody(e.target.value) } className="form-control h-[420px] w-1/2 bg-gray-200 border-gray-200 border-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                    <button type="submit" className="w-52 mt-10 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-lg shadow" >Post the sheet out of it</button>
                </div>
            </form>
      </div>
  )
}

export default CreateBlog;

