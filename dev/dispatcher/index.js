import { Dispatcher } from 'flux';

import store from '../store';

const dispatcher = new Dispatcher();
dispatcher.register((action) => {
	switch(action.type) {
		case 'ADD_NEWS': {
			store.addNews(action.payload);
			break;
		}		
	}
	store.emitStore();
});

export default dispatcher;