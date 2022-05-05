import React from "react";

export default class UsersList extends React.Component {
    constructor(props) {
        super(props);
        fetch("https://reqres.in/api/users?page=1")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(Array.from(data.data));
                this.state = {users : Array.from(data.data)}
                console.log(this.state.users)
            });
        //
        // this.state={ users : []}

    }


    // update(page){
    //     fetch(`https://reqres.in/api/users?page=${page}`)
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(Array.from(data.data));
    //         });
    //
    //
    // }

    render() {
        console.log("render")
        return(
            <React.Fragment>
                <ul>
                    { this.state.users.map((e)=> <li key={e.id}>{e.first_name}</li>)}
                </ul>
            </React.Fragment>
        )

    }
}