import axios from 'axios'
import React, { useState , useEffect} from 'react'
import UserCard from './UserCard'

const UserList = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers (res.data))
        .catch((err) => console.log (err))
    },[])
    
return (
    <div >
        <h1>User List</h1>
        <div className='userlist'>
            {users.map((el) =>(<UserCard user={el} key={el.id}/>))}
        </div>
    </div>
)
}

export default UserList