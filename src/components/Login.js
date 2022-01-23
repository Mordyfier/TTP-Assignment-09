import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function Login(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="login">
            {location.state && 
            <div className="redirect-login">
                <h1>You need to log in to see this page.</h1>
            </div>}
            <p>Hint: Anything works.</p>
            <form onSubmit={e => {
                const now = new Date();
                e.preventDefault();
                props.setCurrentUser({
                    userName: userName,
                    memberSince: now.toLocaleDateString()
                });
                navigate('/userProfile');
            }}>
                <label>
                    Enter Username: <input type="text" value={userName} placeholder="Username" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    Enter Password: <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}