import React from "react";

export default class Li extends React.Component{

    strSearchSlice(str,search){
        const content1 = str.slice(0,str.toLowerCase().indexOf(search.toLowerCase()));
        const content2 = str.slice(str.toLowerCase().indexOf(search.toLowerCase()), str.toLowerCase().indexOf(search.toLowerCase())+search.length);
        const content3 = str.slice(str.toLowerCase().indexOf(search.toLowerCase())+search.length);

        if (content3.toLowerCase().includes(search.toLowerCase())){
            return ( <span>{content1}<span className = "found">{content2}</span>{this.strSearchSlice(content3,search)}</span> );
        }
        return ( <span>{content1}<span className = "found">{content2}</span>{content3}</span> );
    }

    render() {
        const searchText = this.props.search;
        const content = this.props.content;
        let contentNew = content;

            if (searchText.length > 0){
                contentNew = this.strSearchSlice(content,searchText);
            }

        const isHidden =searchText.length && !content.toLowerCase().includes(searchText.toLowerCase());
        return (<li style={{display: isHidden ? 'none' : 'block'}}>{contentNew}</li>)
    }
}