import React, {useState, useEffect} from "react";

export default function Li(props) {

    return (<li onClick={()=>props.calc(1,props.index)} onContextMenu={ (e) => { e.preventDefault(); return ( props.calc(-1,props.index) )   } }>{props.value}</li>)

}