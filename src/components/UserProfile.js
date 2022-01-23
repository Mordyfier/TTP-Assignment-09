import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfile(props) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!props.userName) {
            navigate('/login', {state : {notLoggedIn : true}});
        }
    })
    return (
        <div className="user-profile">
            <h2>Welcome back, {props.userName}!</h2>
            <div>Username: {props.userName}</div>
            <div>Member Since: {props.memberSince}</div>
        </div>
    )
}