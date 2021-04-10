import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayRegister.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayRegister(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			fullname: '',
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="register form">
				<form onSubmit={this.displayRegister}>
					<h2>Register</h2>
					<div className="input">
						<div className="name input-box">
							<input
								type="text"
								placeholder="Full Name"
								name="fullname"
								value={this.state.fullname}
								onChange={this.update}
							/>
						</div>

						<div className="email input-box">
							<input
								type="text"
								placeholder="Enter your email"
								name="email"
								value={this.state.email}
								onChange={this.update}
							/>
						</div>

						<div className="pasword input-box">
							<input
								type="password"
								placeholder="Password"
								name="password"
								value={this.state.password}
								onChange={this.update}
							/>
						</div>

						<div className="password input-box">
							<input type="password" placeholder="Confirm Password" name="password1" />
						</div>
						<div className="input-box">
							<input type="submit" value="Login" />
						</div>

					</div>

				</form>
				<div className="account">
					<span>do you have account ? </span><Link className="login-Here" to="/">Login Here</Link>
				</div>

			</div>
		);
	}
}

export default Register;
