import React from "react";

export default function Formulario() {
    return (
        <form>
            <FormInput title="Email" name="email" type="email" placeholder="mail@example.com"/>
            <FormInput title="Password" name="password" type="password" placeholder="******"/>
            <br/>
            <FormButtonSend title="Enviar"/>
        </form>
    );
}

function FormInput (props) {
    const {title, name, type, placeholder} = props;
    return (
        <div>
            <label>{title}</label>
            <input name={name} type={type} placeholder={placeholder}/>
        </div>
    );
}

function FormButtonSend(props) {
    const {title} = props;
    return (
        <div>
            <button>{title}</button>
        </div>
    );
}