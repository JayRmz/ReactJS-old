import React from "react";
import styles from '../css/Button.module.css';
import PropTypes from "prop-types";

export default function Saludar(props) {
    // const {user = {} , saludarFunction} = props;
    // const {nombre, apellidos} = user;


    const {
        user: {nombre, apellidos, edad, color},
        saludarFunction
    } = props;

    return (
        <div>
            <h1>My name is: {nombre} {apellidos}</h1>
            <h2> I'm {edad} years old</h2>

            <p style={{color: '#f00'}}>Styled <span style={{color:'#00f'}}>Hello</span></p>

            <button className={styles.buttonSuccess} onClick={() => saludarFunction(nombre)}>Say Hi!</button>
            <button className={styles.buttonError}>Goodbye</button>
        </div>
    )
};

Saludar.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    saludarFunction: PropTypes.func 

};