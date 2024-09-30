import React from "react";

const User = ({
    user,
    onFollow,
}) => {

console.log('user render');
    
    return (
        <div className="userContainer">
            <div className="avatar">
                <img src="" alt="" />
                <button onClick={()=>onFollow(user.id)}>{user.followed ? 'Отписаться' : 'Подписаться'}</button>
            </div>
            <div className="userDescription">
                <div className="userName">
                    <h3>{user.fullName()}</h3>
                    <p>{user.status}</p>
                </div>
                <div className="userLocation">
                    <p>{user.location.country}</p>
                    <p>{user.location.city}</p>
                </div>
            </div>
        </div>
    )
};

export default User;