import { combineReducers } from 'redux';

const initialState = {
	currentWeatherData: [],
	loaded: true,
	background: 'space',
	delay: 5
}

const currentWeatherData = (currentWeatherData = initialState.currentWeatherData, action) => {
	switch(action.type) {
		case 'FETCH_CURRENTWEATHERDATA':
			console.log(action.payload.result);
			return action.payload.result;
		default:
			return currentWeatherData;
	}
};

const loaded = (loaded = initialState.loaded, action) => {
	switch(action.type) {
		case 'FETCH_ERROR':
			console.log(action.payload.error);
			return action.payload.loaded;
		default:
			return loaded;
	}
};

const background = (background = initialState.background, action) => {
	switch(action.type) {
		case 'SWITCH_BACKGROUNDS':
			return action.payload;
		default:
			return background;
	}
};

const delay = (delay =  initialState.delay, action) => {
	switch(action.type) {
		case 'CHANGE_DELAY':
			return action.payload;
		default:
			return delay;
	}
};

export default combineReducers({
	currentWeatherData: currentWeatherData,
	loaded: loaded,
	background: background,
	delay: delay
});