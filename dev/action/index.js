import dispatcher from '../dispatcher';

export const addNews = (textNews) => {
	dispatcher.dispatch({
		type: 'ADD_NEWS',
		payload: textNews,
	});
};
