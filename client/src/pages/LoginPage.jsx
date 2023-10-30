
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";

export default function LoginPage() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            await axios.post('/login', {
                email,
                password,
            });
            alert('login successful');
            setRedirect(true)

        } catch (e) {
            alert('login failed')
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className="flex justify-center items-center h-screen bg-indigo-600">
            <form className="w-96 p-6 shadow-lg bg-white rounder-md rounded-xl" onSubmit={handleLoginSubmit}>
                <h1 className="text-3xl block text-center font-semibold">Login</h1>
                <hr className="mt-3" />
                <div className="mt-3">
                    <label className="block text-base mb-2">Email</label>
                    <input
                        value={email} onChange={ev => setEmail(ev.target.value)}
                        type="email" id="email" className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600" placeholder="Enter Email..." />
                </div>
                <div className="mt-3">
                    <label className="block text-base mb-2">Password</label>
                    <input
                        value={password} onChange={ev => setPassword(ev.target.value)}
                        type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600" placeholder="Enter Password..." />
                </div>
                <div className="mt-5">
                    <button type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold w-full">Login</button>
                </div>
            </form>
        </div>
    )
}