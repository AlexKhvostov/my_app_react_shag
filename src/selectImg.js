import React , {useState, useEffect} from "react";
import Image from "./image";

export default function SelectImg () {

    const [links, setLinks]=useState(["https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg",
        "https://klike.net/uploads/posts/2020-03/1583662497_1.jpg",
        "https://klike.net/uploads/posts/2019-06/medium/1561011184_2.jpg"]);
    const [indexImg, setIndexImg]= useState(0);
    const [link, setLink]=useState(links[indexImg]);
    const [inputLink, setInputLink]=useState("")

    return(
        <React.Fragment>
            <select name="imgLink" onChange={ (e) => {setLink(e.target.value)}}>
            {links.map((img, i) => <option key = {i}  value={img} >{img} </option> ) }
            </select>

            <Image link={link}/>
            <input type="text" value={inputLink}  onChange ={(event)=>{setInputLink(event.target.value)}} />

            <button onClick={()=>{setLinks(links => {setInputLink("") ; return[...links,inputLink]})}}>add</button>
            <button onClick={()=>{setInputLink("")}}>clear</button>

        </React.Fragment>
    );


}