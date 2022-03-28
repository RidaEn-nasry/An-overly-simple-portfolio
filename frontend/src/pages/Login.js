import React from 'react';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // a function to post data to the server using fetch
    const handleSubmit = async e => {
        e.preventDefault();
        // console.log(email, password);
        const data = {
            email: email,
            password: password,
        };
        console.log(JSON.stringify(data));
        await fetch('http://localhost:8080/admin/login/', {
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
            })
            .catch(err => console.log(err));
    };
    return (
        <div>
            {/* style form with tailwind */}
            <form
                onSubmit={handleSubmit}
                className=" flex flex-col justify-center items-center h-screen gap-12"
            >
                {/* // post request to server */}
                <div className="form-group w-70  ">
                    <label htmlFor="exampleInputEmail1"></label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        value={email}
                        className="form-control w-full bg-gray-200 border-gray-200 border-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1"></label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        className="form-control w-full bg-gray-200 border-gray-200 border-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        autoComplete="password"
                    />
                </div>
                <button type="submit" className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded-lg shadow" >Open SimSim</button>
            </form>
        </div>
    );
}

export default Login;
