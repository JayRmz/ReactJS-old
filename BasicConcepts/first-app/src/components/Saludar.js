import React from "react";
import styles from '../css/Button.module.css'
export default function Saludar(props) {
    const {user = {}, saludarFunction} = props;
    const {name = "Anonymous"} = user
    return (
        <div>
            <h1>My name is: {user.name} {user.lastName}</h1>
            <h2> I'm {user.age} years old</h2>

            <p style={{color: '#f00'}}>Styled <span style={{color:'#00f'}}>Hello</span></p>

            <button className={styles.buttonSuccess} onClick={() => saludarFunction(name)}>Say Hi!</button>
            <button className={styles.buttonError}>Goodbye</button>
        </div>
    )
};