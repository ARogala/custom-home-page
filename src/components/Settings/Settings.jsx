import React from 'react';

import { connect } from 'react-redux';

import { switchBackgrounds } from '../../redux/actions';

class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			bgChoice: '--Please choose an option--',
			delay: '--Please choose an option--'
		}
	}

	handleBgChange(e) {
		this.setState({bgChoice: e.target.value});
	}

	handleDelayChange(e) {
		this.setState({delay: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.delay);
		if(this.state.bgChoice === '--Please choose an option--' || this.state.delay === '--Please choose an option--') {
			alert('Please select background category and delay');
			return;
		}
		this.props.switchBackgrounds(this.state.bgChoice);
		this.resetForm();
	}

	resetForm() {
		this.setState({
			bgChoice: '--Please choose an option--',
			delay: '--Please choose an option--'
		});
	}

	render() {
		return(
			<form className="settings" onSubmit={(e) => this.handleSubmit(e)}>
				<fieldset className="settings__fieldset">
					<legend className="settings__legend">Choose a background category:</legend>
					<label className="settings__label" htmlFor="backgrounds-select">Backgrounds:</label>
					<select
						className="settings__select"
						id="backgrounds-select"
						value={this.state.bgChoice}
						onChange={(e) => this.handleBgChange(e)}
					>
					    <option value="--Please choose an option--" disabled>--Please choose an option--</option>
					    <option value="Nature">Nature</option>
					    <option value="Space">Space</option>
					    <option value="CitySkylines">CitySkylines</option>
					    <option value="Animals">Animals</option>
					    <option value="Ocean">Ocean</option>
					</select>
				</fieldset>
				<fieldset className="settings__fieldset">
					<legend className="settings__legend">Choose background delay:</legend>
					<label className="settings__label" htmlFor="delay-select">Delay:</label>
					<select
						className="settings__select"
						id="delay-select"
						value={this.state.delay}
						onChange={(e) => this.handleDelayChange(e)}
					>
					    <option value="--Please choose an option--" disabled>--Please choose an option--</option>
					    <option value="5">5 Seconds</option>
					    <option value="10">10 Seconds</option>
					    <option value="15">15 Seconds</option>
					    <option value="20">20 Seconds</option>
					    <option value="30">30 Seconds</option>
					</select>
				</fieldset>
				<div className="settings__btnContainer">
					<button
						type="submit"
						value="Submit"
					>
						Change Settings
					</button>
					<button
						type="button"
						value="Reset"
						onClick={() => this.resetForm()}
					>
						Cancel
					</button>
				</div>
			</form>
		);
	}
}

const mapDispatchToProps = {
	switchBackgrounds: switchBackgrounds
};

export default connect(null, mapDispatchToProps)(Settings);

