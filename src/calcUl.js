import React, {useState, useEffect} from "react";
import Li from "./aclcLi";

const defArr = [];
for (let i =1; i<=15 ; i++){
    defArr.push(i);
}

export default function CalcUl() {

    const [arr, setArr] = useState(defArr);
    console.log(arr)

    function calc(a, index) {

        if (a === 1) {
            setArr(arr.map((a, i, arr) => (i === index) ? (arr[i - 1] || 0) + (arr[i + 1] || 0) : arr[i]))
        } else {
            setArr(arr.map((a, i, arr) => (i === index) ? (arr[i - 1] || 1) * (arr[i + 1] || 1) : arr[i]))
        }
    }

    return (
        <React.Fragment>
            <ul>
                {arr.map((a, i) => <Li key={i} index={i} calc={calc} value = {a}/>)}
            </ul>
        </React.Fragment>
    );


}