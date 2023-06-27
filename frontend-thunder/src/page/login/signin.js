import * as React from 'react';
import { useState } from 'react';
import './signin.css'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <section className='sign-container'>
            <form onSubmit={handleSubmit} noValidate>
                <span class="material-symbols-outlined icon-sign">
                    tv_signin
                </span>
                <p className='welcome'>Welcome Back</p>
                <label>Email</label>
                <input
                    type='text'
                    margin="normal"
                    required
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    margin="normal"
                    required
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">
                    Sign In
                </button>
            </form>
        </section>
    );
}