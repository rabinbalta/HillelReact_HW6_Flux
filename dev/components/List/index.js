import React, { Component} from 'react';
import styles from './style.css';
import store from '../../store';

class List extends Component {
    constructor() {
        super();
        this.state = {
            data: store.getStore(),         
            quanNews: 2,
        }

        this.toggleNews = this.toggleNews.bind(this);
        this.changeDataFromStore = this.changeDataFromStore.bind(this);       
    }

    componentDidMount() {
        store.addEventListener(this.changeDataFromStore);
    }

    componentWillUnmount() {
        store.removeEventListener(this.changeDataFromStore);
    }

    changeDataFromStore() {
        this.setState({
            data: store.getStore(),
        });
    }

    toggleNews() {        
        this.setState({
            quanNews: this.state.quanNews + 2
        });
    }    

	render() {
        const {data} = this.state;
        const {quanNews} = this.state;   
		return (
            <>
                <button
                    className={styles.toggleNews}
                    onClick={ this.toggleNews }
                >
                    toggle 2 news
                </button>
                <ul className={styles.News}>
                    {
                        data.slice([0], [quanNews]).map(news => (
                            <li className={styles.Topic} key={news.id}>                                
                                {news.text}
                            </li>
                        ))
                    }                   
                </ul>               
            </>                    
        );
	}
}

export default List;