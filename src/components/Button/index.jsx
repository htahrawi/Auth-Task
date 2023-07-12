import React, { Component } from 'react'
import './style.css'
class Button extends Component {
    render() {
        const { label, isFilled = false, type, onClickHandler } = this.props;
        return (
            <button 
                type={type}
                className={`btn ${isFilled=='true' ? 'filled-btn' : 'empty-btn'}`}
                onClick={onClickHandler}
                >
                {label}
            </button>
        )
    }
}

export default Button;