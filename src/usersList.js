import React, {useState, useEffect} from "react";
import Spinner from "./spinner";

export default function UsersList() {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoad, setIsLoad] = useState(true);

    function loadUsers() {
        setIsLoad(true)
        fetch(`https://reqres.in/api/users?page=${page}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data.data);
                setUsers(data.data)
            })
            .finally(()=>{
                setTimeout(()=>{setIsLoad(false)},500)

            })
    }

    useEffect(()=> {loadUsers()}, [page])

    return (
        <React.Fragment>
            <ul>
                {!isLoad && users.map((e) => <li key={e.id}>{e.first_name}</li>)}
            </ul>
            <button onClick={()=>{setPage(page-1)}}>back</button>
            <button onClick={()=>{setPage(page+1)}}>next</button>

            <Spinner isLoad={isLoad}/>
        </React.Fragment>
    )


}