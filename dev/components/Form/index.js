import React, { Component } from 'react';
import styles from './style.css';
import { addNews } from '../../action';

class Form extends Component {
    constructor() {
        super();

        this.state = {text: ''};  

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const textNews = this.state;
        textNews.id = Date.now();
        console.log('addNews');        
        addNews(textNews);              
    }

    handleChange(e) {this.setState({text: e.target.value});
    }
   
	render() {
        const textNews = this.state;
        return (
			<form className={styles.Form} onSubmit={this.handleSubmit}>
                <label className={styles.Label}>
                    Add news:
                    <textarea className={styles.Text} value={this.state.text} onChange={this.handleChange}/>
                </label>
                <input className={styles.Input} type="submit" value="Go!"/>
            </form>
		);
	}
}

export default Form;