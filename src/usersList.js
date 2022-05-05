import React from "react";
import Spinner from "./spinner";

export default class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.page = 1;

        this.state={ users : props.list,
        spinner : "none"}
        this.update = this.update.bind(this)
    }


    update(){
        this.setState({spinner:"block"})
        this.page++;
        fetch(`https://reqres.in/api/users?page=${this.page}`)
            .then((response) => {
                return response.json();

            })

            .then((data) => {
                console.log(Array.from(data.data));
                this.setState({users : Array.from(data.data)})
            })
            .finally(()=>
                setTimeout(()=> this.setState({spinner:"none"}),500)
               )
            ;


    }

    render() {


        console.log("render")
        return(
            <React.Fragment>
                <ul>
                    { this.state.users.map((e)=> <li key={e.id}>{e.first_name}</li>)}
                </ul>
                <button onClick={this.update}>next</button>
                <Spinner hidden={this.state.spinner}/>
            </React.Fragment>
        )

    }
}