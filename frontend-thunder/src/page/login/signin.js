import * as React from 'react';
import { useState } from 'react';
import './signin.css'
import background from '../../assets/signbg.jpg'

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

    React.useEffect(() => {
        document.title = "Sign In | THUNDERCATS"
    })

    return (
        <section className='sign-container'>
            <div>
                <form onSubmit={handleSubmit}>
                    <p className='welcome'>Welcome Back Admin,<br></br><span>THUNDERCATS</span></p>
                    <div className='input-container'>
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
                            placeholder='thundercats@gmail.com'
                        />
                    </div>
                    <div className='input-container'>
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
                            placeholder='masukkan Password anda'
                        />
                    </div>
                    <button type="submit">
                        Sign In
                    </button>
                </form>
            </div>
            <div className='foto'>
                <img src={background} alt="background" />;
            </div>
        </section>
    );
}