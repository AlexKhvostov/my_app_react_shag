import React from "react";
import { faker } from '@faker-js/faker';
import _ from 'lodash';
import Li from "./li";

export default class List extends React.Component{
    constructor() {
        super();
        this.state = {
            text: '',
            items: _.range(1,51).map(()=> faker.random.words(5))
        }
        this.filter = this.filter.bind(this);
    }
    filter(event){
        this.setState({text:event.target.value});
    }
    render() {
        return (
            <React.Fragment>
                <input type="search" onChange={this.filter} />
                <ul>{this.state.items.map((item, i) => <Li key={i} search={this.state.text} content={item}/>)}</ul>
            </React.Fragment>
        )
    }
}