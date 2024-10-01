import React from "react";
import avatar  from "../../../asets/avatar.jpg";

const User = ({
    user,
    onFollow,
}) => {

console.log('user render');
    const st = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
    }
    return (
        <div className="userContainer">
            <div className="avatar">
                <img src={avatar} style={st} />
                <button onClick={()=>onFollow(user.id)}>{user.followed ? 'Отписаться' : 'Подписаться'}</button>
            </div>
            <div className="userDescription">
                <div className="userName">
                    <h3>{user.name}</h3>
                    <p>{user.status}</p>
                </div>
                <div className="userLocation">
                    <p>Страна</p>
                    <p>Город</p>
                </div>
            </div>
        </div>
    )
};

export default User;