import React, { Component } from 'react'
import './style.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
class AuthPage extends Component {
    state = {
        login: true,
        email: 'husam.3@gmail.com',
        password: '',
        repeatedPassword: 'asd',
        policy: false,
    }
    parameters = {
        count: false,
        letters: false,
        numbers: false,
        special: false
    }
    strengthChecker = () => {
        let pass = this.state.password;
        this.parameters.count = pass.length > 7 ? true : false;
        this.parameters.letters = (/[A-Za-z]+/.test(pass) ? true : false);
        this.parameters.numbers = (/[0-9]+/.test(pass) ? true : false);
        this.parameters.special = (/[!"$%&/()=?@~`\\.';:+=^*_-]+/.test(pass) ? true : false);
        let barLength = Object.values(this.parameters).filter(value => value);
        this.renderStrengthBar(barLength);
        console.log(Object.values(this.parameters), barLength);
    }
    renderStrengthBar = (barLength) => {
        let strengthBar = document.getElementById('strength-bar');
        for (let i in barLength) {
            console.log("I is ", barLength);
            let span = document.createElement("span");
            span.classList.add('strength');
            strengthBar.appendChild(span);
            console.log(strengthBar);
        }
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value })
        this.strengthChecker();
    }
    changeRepeatedPasswordHandler = (event) => {
        this.setState({ repeatedPassword: event.target.value })
    }
    agreeingPolicyHandler = (event) => {
        this.setState({ policy: !this.state.policy })
    }
    ToggleHandler = () => {
        this.setState({ login: !this.state.login})
    }

    onRegisterSubmitHandler = (event) => {
        event.preventDefault();
        if (
            this.state.password.length >= 8 &&
            this.state.password === this.state.repeatedPassword &&
            this.state.policy
        ) {
            alert("Registered Successfully")
        } else {
            console.log("email is ", this.state.email, "\n pass is ", this.state.password,
                "\n rpass: ", this.state.repeatedPassword, "\n policy: ", this.state.policy);
        }
    }
    render() {
        const { email, password, repeatedPassword, policy, login } = this.state;
        return (
            login ? (
                <section className="register__container">
                    <div className="left-container">
                        <div className="left-content">
                            <img src="/assets/whiteLogo.png" alt="logo" className='logo' />
                            <article className="quotes-container">
                                <img src="/assets/qoute.png" alt="qoute" />
                                <p className='paragraph'>I always observe the people who pass by when I ride an escalator.
                                    I'll never see most of them again, so I imagine a lot of things about
                                    their lives... about the day ahead of them. <br /><br /><br /><br /> Hideo Kojima </p>
                                <div className="closing-container">
                                    <img src="/assets/close.png" alt="" className='close-icon' />
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="right-content">
                            <div className="back-icon" onClick={this.ToggleHandler}>
                                <img src="/assets/back.png" alt="" />
                                <span>Back</span>
                            </div>
                            <div className="register">
                                <article className="register-form">
                                    <h2>Register Individual Account!</h2>
                                    <p>For the purpose of gamers regulation, your<br /> details are required.</p>
                                    <form onSubmit={this.onRegisterSubmitHandler}>
                                        <Input
                                            type='email'
                                            id='email'
                                            placeholder='Enter email address'
                                            label='Email*'
                                            value={email}
                                            changeHandler={this.changeEmailHandler}
                                        />
                                        <Input
                                            type='password'
                                            id='password'
                                            placeholder='Password'
                                            label='Create Password*'
                                            value={password}
                                            changeHandler={this.changePasswordHandler}
                                        />
                                        <div id="strength-bar">
                                        </div>
                                        <p id="strength-msg">Not bad but you know you can do it better</p>
                                        <Input
                                            type='password'
                                            id='repeated-password'
                                            placeholder='Repeat password'
                                            label='Repeat password*'
                                            value={repeatedPassword}
                                            changeHandler={this.changeRepeatedPasswordHandler}
                                        />
                                        <div className="checkbox-container">
                                            <input
                                                type="checkbox"
                                                name="agree"
                                                id="agree"
                                                className='checkbox-input'
                                                value={policy}
                                                onChange={this.agreeingPolicyHandler}
                                            />
                                            <label htmlFor="agree" className='checkbox-label'>I agree to terms & conditions</label>
                                        </div>
                                        <Button
                                            label='Register Account'
                                            isFilled='true'
                                            type='submit'
                                        />
                                        <div className="or-div">
                                            <hr />
                                            <span>Or</span>
                                            <hr />
                                        </div>
                                        <Button
                                            label='Login'
                                            isFilled="false"
                                            onClickHandler={this.ToggleHandler}
                                        />
                                    </form>
                                </article>
                            </div>

                        </div>
                    </div>
                </section>
            ) : (
                <section className='login__container'>
                    <div className="left-container-login">
                        <div className="left-content-login">
                            <img src="/assets/blueLogo.png" alt="logo" className='logo' />
                            <article className="quotes-container-login">
                                <img src="/assets/qouteGray.png" alt="qoute" />
                                <p className='paragraph-login'>I always observe the people who pass by when I ride an escalator.
                                    I'll never see most of them again, so I imagine a lot of things about
                                    their lives... about the day ahead of them. <br /><br /> Hideo Kojima </p>
                            </article>
                            <img src="/assets/control.png" alt="" className='close-icon-login' />
                        </div>
                    </div>
                    <div className="right-container-login">
                        <div className="right-content-login">
                            <div className="login">
                                <article className="login-form">
                                    <h1 className='title'>Join the game!</h1>
                                    <p className='login-ads'>Go inside the best gamers social network!</p>
                                    <div className="icons_container">
                                        <span className='icon_container'>
                                            <img src="/assets/googleIcon.png" alt="" />
                                        </span>
                                        <span className='icon_container'>
                                            <img src="/assets/twitterIcon.png" alt="" />
                                        </span>
                                        <span className='icon_container'>
                                            <img src="/assets/linkedinIcon.png" alt="" />
                                        </span>
                                        <span className='icon_container'>
                                            <img src="/assets/githubIcon.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="or-div">
                                        <hr />
                                        <span>Or</span>
                                        <hr />
                                    </div>
                                    <form onSubmit={this.onRegisterSubmitHandler}>
                                        <Input
                                            type='email'
                                            id='email'
                                            placeholder='Write your email'
                                            label='Your Email'
                                            value={email}
                                            changeHandler={this.changeEmailHandler}
                                        />
                                        <Input
                                            type='password'
                                            id='password'
                                            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                                            label='Enter your password'
                                            value={password}
                                            changeHandler={this.changePasswordHandler}
                                        />
                                        <br /><br />
                                        <Button
                                            label='Login'
                                            isFilled='true'
                                            type='submit'
                                        />
                                        <p className='to-register'>Don’t have an account? <a href='' onClick={this.ToggleHandler}>Register</a> </p>
                                    </form>
                                </article>
                            </div>

                        </div>
                    </div>
                </section>
            )
        )
    }
}
export default AuthPage