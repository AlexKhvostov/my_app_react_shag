import React from "react";

export default class Spinner extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return(
            <div className="loader" style={ {display : this.props.hidden } }>Loading...</div>
            )

    }

}