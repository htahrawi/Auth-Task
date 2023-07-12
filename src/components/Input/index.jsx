import React, { Component } from 'react'
import './style.css'
export default class Input extends Component {
    render() {
        const { id, label, type, placeholder, value, changeHandler } = this.props
        return (
            <>
                <label htmlFor={id} className='input-label'>{label}</label>
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className='custom-input'
                    onChange={changeHandler}
                    value={value}
                    required
                />
            </>
        )
    }
}
