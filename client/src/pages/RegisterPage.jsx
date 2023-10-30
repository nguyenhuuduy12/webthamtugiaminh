import { useState } from "react"
import axios from "axios"
export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    async function registerAdmin(ev) {
        ev.preventDefault();
        try {
            await axios.post('/register', {
                username,
                email,
                password,
            });
            alert('Registration successful. Now you can log in');
        } catch (e) {
            alert('Registration failed. Please try again later');
        }
    }
    return (
        <div className="flex justify-center items-center h-screen bg-indigo-600">
            <form className="w-96 p-6 shadow-lg bg-white rounder-md rounded-xl" onSubmit={registerAdmin}>
                <h1 className="text-3xl block text-center font-semibold">Register</h1>
                <hr className="mt-3" />
                <div className="mt-3">
                    <label htmlFor="username" className="block text-base mb-2">Username</label>
                    <input value={username} onChange={ev => setUsername(ev.target.value)}
                        type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600" placeholder="Enter Username..." />
                </div>
                <div className="mt-3">
                    <label htmlFor="username" className="block text-base mb-2">Email</label>
                    <input value={email} onChange={ev => setEmail(ev.target.value)}
                        type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600" placeholder="Enter Username..." />
                </div>
                <div className="mt-3">
                    <label htmlFor="password" className="block text-base mb-2">Password</label>
                    <input value={(password)} onChange={ev => setPassword(ev.target.value)}
                        type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600" placeholder="Enter Password..." />
                </div>
                {/* <div className="mt-3">
                    <label htmlFor="password" className="block text-base mb-2">Password</label>
                    <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus-ring-0 focus:border-gray-600" placeholder="Enter Password..." />
                </div> */}
                <div className="mt-5">
                    <button type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold w-full">Register</button>
                </div>
            </form>
        </div>
    )
}