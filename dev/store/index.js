import EventEmitter from 'events';

let listNews = localStorage.news ? JSON.parse(localStorage.news) : [
	{
	id: 1,
	text: 'news1'
	}
];		

const EVENT = 'newNews';

const store = Object.assign({}, EventEmitter.prototype, {
	getStore() {
		return listNews;
	},
	addEventListener(cb) {
		this.addListener(EVENT, cb);
	},
	removeEventListener(cb) {
		this.removeListener(EVENT, cb);
	},
	emitStore() {
		this.emit(EVENT);
	},
	addNews(textNews) {		
		listNews = [textNews,...listNews];	
		localStorage.news = JSON.stringify(listNews);
	}	
});

export default store;