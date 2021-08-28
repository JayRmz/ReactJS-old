import React from "react";

export default function Saludar (props) {
    console.log(props);
    const user = props.user
    console.log(user)
    return (
        <div>
            <p>
                Hola {user.name}, 
                tiene {user.age} años,
                color favorito: {user.color}
            </p>
        </div>
    )
};