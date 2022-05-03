import React from "react";
import Image from "./image";

export default class SelectImg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            link: ["https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg",
                "https://klike.net/uploads/posts/2020-03/1583662497_1.jpg",
                "https://klike.net/uploads/posts/2019-06/medium/1561011184_2.jpg"],
            defaultIndexImage: 0
        }

        this.edit = this.edit.bind(this);
    }

    edit(i) {
        console.log(i)
        this.setState({defaultIndexImage: i})
    }

    render() {

        return(
            <React.Fragment>
                <select name="imgLink">
                {this.state.link.map((img, i) => <option key = {i} onChange={ () => {this.edit(i)}} value={img} >{img} </option> ) }
                </select>

                <Image link={this.state.link[this.state.defaultIndexImage]}/>
            </React.Fragment>
        );
    }

}